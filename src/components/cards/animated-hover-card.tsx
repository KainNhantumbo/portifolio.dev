'use client';

import { Code, Puzzle, Sparkles, Zap } from 'lucide-react';
import { useEffect } from 'react';

const cards = [
  {
    id: 1,
    icon: Zap,
    title: 'Wherever you go,<br/>the cursor follows',
    badge: 'Pro',
    hue: 200
  },
  {
    id: 2,
    icon: Code,
    title: 'One event listener<br/>powers it all',
    badge: 'Pro',
    hue: 280
  },
  {
    id: 3,
    icon: Puzzle,
    title: 'Lean into CSS<br/>and the cascade',
    badge: 'Pro',
    hue: 150
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'One attribute,<br/>make it glow',
    badge: 'Pro',
    hue: 50
  }
];

export function GlowingCards() {
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      document.documentElement.style.setProperty('--x', clientX.toString());
      document.documentElement.style.setProperty('--y', clientY.toString());
      document.documentElement.style.setProperty(
        '--xp',
        (clientX / window.innerWidth).toString()
      );
      document.documentElement.style.setProperty(
        '--yp',
        (clientY / window.innerHeight).toString()
      );
    };

    document.body.addEventListener('pointermove', handlePointerMove);
    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-950 p-8'>
      <div className='flex max-w-6xl flex-wrap justify-center gap-8'>
        {cards.map((card) => (
          <div
            key={card.id}
            className='glow-card relative grid aspect-[3/4] w-[260px] grid-rows-[1fr_auto] gap-4 rounded-xl border border-white/20 p-4 shadow-lg backdrop-blur-md'
            style={
              {
                '--card-hue': card.hue,
                backgroundColor: 'hsl(0 0% 60% / 0.15)',
                backgroundImage: `radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(var(--card-hue) 100% 70% / 0.1), transparent)`,
                backgroundSize: 'calc(100% + 4px) calc(100% + 4px)',
                backgroundPosition: '50% 50%',
                backgroundAttachment: 'fixed'
              } as React.CSSProperties
            }>
            <div
              className='glow-card__outer-glow pointer-events-none absolute inset-0 rounded-xl'
              style={{
                backgroundImage: `radial-gradient(var(--spotlight-size) var(--spotlight-size) at calc(var(--x) * 1px) calc(var(--y) * 1px), hsl(var(--card-hue) 100% 70% / 0.1), transparent)`,
                backgroundSize: 'calc(100% + 4px) calc(100% + 4px)',
                backgroundPosition: '50% 50%',
                backgroundAttachment: 'fixed',
                filter: 'blur(20px)'
              }}
            />

            <div className='glow-card__content relative z-10 grid grid-rows-[auto_1fr_auto] gap-4 text-gray-200'>
              <span className='text-xs font-light opacity-50'>{card.badge}</span>
              <div className='relative flex items-center'>
                {[...Array(4)].map((_, i) => (
                  <card.icon
                    key={i}
                    className='h-20 w-20 transition-all'
                    style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      left: i === 0 ? 0 : `${40 * i}%`,
                      top: i === 0 ? 0 : '50%',
                      transform:
                        i === 0 ? 'none' : `translateY(-50%) scale(${1 - i * 0.2})`,
                      zIndex: 4 - i,
                      opacity: i === 0 ? 1 : Math.max(0.4 / (2 * (i * 10)), 0.05)
                    }}
                  />
                ))}
              </div>
              <h2
                className='text-2xl font-thin leading-tight'
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
            </div>

            <button
              className='relative z-10 cursor-pointer rounded-lg border border-transparent bg-black px-6 py-3 text-center font-medium text-white transition-colors hover:bg-gray-900'
              style={{
                backgroundImage: `radial-gradient(calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at calc(var(--x) * 1px) calc(var(--y) * 1px), hsla(0, 100%, 100%, 0.3), transparent)`,
                backgroundSize: 'calc(100% + 4px) calc(100% + 4px)',
                backgroundPosition: '50% 50%',
                backgroundAttachment: 'fixed'
              }}>
              Follow
            </button>

            <style>{`
              .glow-card::before,
              .glow-card::after {
                pointer-events: none;
                content: "";
                position: absolute;
                inset: -2px;
                border: 2px solid transparent;
                border-radius: 12px;
                background-attachment: fixed;
                background-size: calc(100% + 4px) calc(100% + 4px);
                background-repeat: no-repeat;
                background-position: 50% 50%;
                mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
                mask-clip: padding-box, border-box;
                mask-composite: intersect;
              }

              .glow-card::before {
                background-image: radial-gradient(
                  calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
                  calc(var(--x) * 1px) calc(var(--y) * 1px),
                  hsl(var(--card-hue) 100% 50% / 1), transparent 100%
                );
                z-index: 2;
                filter: brightness(2);
              }

              .glow-card::after {
                background-image: radial-gradient(
                  calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
                  calc(var(--x) * 1px) calc(var(--y) * 1px),
                  hsl(0 100% 100% / 1), transparent 100%
                );
                z-index: 2;
              }

              .glow-card__outer-glow::before {
                pointer-events: none;
                content: "";
                position: absolute;
                inset: -10px;
                border: 10px solid transparent;
                border-radius: 12px;
                background-attachment: fixed;
                background-size: calc(100% + 4px) calc(100% + 4px);
                background-repeat: no-repeat;
                background-position: 50% 50%;
                mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
                mask-clip: padding-box, border-box;
                mask-composite: intersect;
                background-image: radial-gradient(
                  calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
                  calc(var(--x) * 1px) calc(var(--y) * 1px),
                  hsl(var(--card-hue) 100% 50% / 1), transparent 100%
                );
                z-index: 2;
                filter: brightness(2);
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
