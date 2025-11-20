'use client';

import gsap from 'gsap';
import { Code, LucideIcon, Puzzle, Sparkles, Zap } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react';

interface CardData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  hue: number;
}

const CARDS_DATA: CardData[] = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Wherever you go, the cursor follows with zero latency.',
    badge: 'Core',
    hue: 220
  },
  {
    id: 2,
    icon: Code,
    title: 'One Listener',
    description: 'One event listener powers it all using delegation.',
    badge: 'DX',
    hue: 280
  },
  {
    id: 3,
    icon: Puzzle,
    title: 'CSS Cascade',
    description: 'Lean into the cascade. Let the browser do the heavy lifting.',
    badge: 'Style',
    hue: 160
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Glow Effect',
    description: 'One attribute, make it glow. Simple and effective.',
    badge: 'UI',
    hue: 45
  }
];

const Card = React.forwardRef<HTMLDivElement, { data: CardData }>(({ data }, ref) => {
  const { hue, icon: Icon, title, description, badge } = data;
  const internalRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!internalRef.current) return;
    gsap.to(internalRef.current, {
      scale: 1.03,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
    });
  };

  const handleMouseLeave = () => {
    if (!internalRef.current) return;
    gsap.to(internalRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      boxShadow: 'none'
    });
  };

  // Combine refs to allow parent to access the DOM element for coordinate tracking
  // and local usage for GSAP animations
  React.useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

  return (
    <div
      ref={internalRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='group relative h-[300px] w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-gray-900/40 will-change-transform'
      style={{ '--hue': hue } as React.CSSProperties}>
      {/*
        1. Border Glow
        We use mask-composite to cut out the center of the div, leaving only the border area.
        Using absolute positioning with calculated coordinates (--x, --y) instead of fixed
        background attachment ensures compatibility with CSS transforms (scale).
      */}
      <div
        className='absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{
          background: `radial-gradient(
            300px circle at var(--x) var(--y),
            hsl(var(--hue) 100% 60%),
            transparent 40%
          )`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '2px'
        }}
      />

      {/*
        2. Inner Spotlight
        A subtle wash of color inside the card.
      */}
      <div
        className='absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{
          background: `radial-gradient(
            400px circle at var(--x) var(--y),
            hsl(var(--hue) 100% 60% / 0.15),
            transparent 40%
          )`
        }}
      />

      {/* 3. Content */}
      <div className='pointer-events-none relative z-10 flex h-full flex-col p-6'>
        <div className='mb-auto flex items-center justify-between'>
          <div
            className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gray-800 shadow-inner transition-colors duration-300 group-hover:bg-gray-800/80'
            style={{ color: `hsl(${hue}, 80%, 70%)` }}>
            <Icon size={20} />
          </div>
          <span className='rounded-full border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/10'>
            {badge}
          </span>
        </div>

        <div className='space-y-3'>
          <h3 className='text-xl font-bold leading-tight text-white'>{title}</h3>
          <p className='text-sm leading-relaxed text-gray-400'>{description}</p>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export function GlowingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardRects = useRef<DOMRect[]>([]);

  // Optimization: Cache bounding boxes to avoid reflows during mousemove
  const updateRects = useCallback(() => {
    cardRects.current = cardsRef.current.map((card) =>
      card ? card.getBoundingClientRect() : new DOMRect()
    );
  }, []);

  useEffect(() => {
    updateRects();
    window.addEventListener('resize', updateRects);
    window.addEventListener('scroll', updateRects, { capture: true, passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update each card's CSS variables directly
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = cardRects.current[index];
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateRects);
      window.removeEventListener('scroll', updateRects);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [updateRects]);

  return (
    <div
      ref={containerRef}
      className='perspective-1000 flex w-full max-w-5xl flex-wrap justify-center gap-4'>
      {CARDS_DATA.map((card, index) => (
        <Card
          key={card.id}
          data={card}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
