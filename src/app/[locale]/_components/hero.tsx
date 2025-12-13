'use client';

import { BubbleBackground } from '@/components/animations/animate-bubbles';
import { AnimateTextFade } from '@/components/animations/animate-text-fade';
import { SocialIcons } from '@/components/social-icons';
import { AnimatedBadge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useI18n } from '@/locales/client';
import { SparkleIcon } from 'lucide-react';
import * as React from 'react';

const Hero = () => {
  const translation = useI18n();

  return (
    <BubbleBackground className='grid h-screen w-full grid-cols-1 place-content-center place-items-center'>
      <section
        id='home'
        className='z-50 flex w-full max-w-[1280px] flex-col gap-3 px-4 py-5 font-sans'>
        <div className='relative flex w-fit flex-col'>
          <h3 className='my-3 font-semibold'>
            <AnimatedBadge
              className='bg-transparent'
              animateBorder={false}
              icon={<SparkleIcon className='h-4 w-4 text-primary' />}>
              {translation('intro.presentation')}
            </AnimatedBadge>
          </h3>
          <div className='flex w-full gap-3'>
            <AnimateTextFade direction='up'>
              <h1 className='my-4 w-full bg-clip-text font-sans text-6xl font-bold leading-normal text-black dark:text-white mobile-x:py-8 lg:text-9xl'>
                {translation('intro.title')}
              </h1>
            </AnimateTextFade>
          </div>
        </div>

        <div className='flex w-full max-w-3xl flex-col gap-4 text-xl font-medium'>
          <AnimateTextFade direction='down' delay={2000}>
            <p className={cn('leading-relaxed text-black dark:text-white')}>
              {translation('intro.message-part-1')}
            </p>
          </AnimateTextFade>
          <AnimateTextFade direction='up' delay={3000}>
            <p className={cn('leading-relaxed text-black dark:text-white')}>
              {translation('intro.message-part-2')}
            </p>
          </AnimateTextFade>
        </div>

        <div className={'mt-6 self-start'}>
          <SocialIcons />
        </div>
      </section>
    </BubbleBackground>
  );
};

export default React.memo(Hero);

import { m as motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };
const OPACITY_DURATION_BASE = 0.8;
const OPACITY_DURATION_VARIATION = 0.2;
const OPACITY_EASE = [0.4, 0, 0.2, 1] as const;
const OPACITY_DELAY_CYCLE = 1.5;
const OPACITY_DELAY_STEP = 0.02;
const MIN_OPACITY_MULTIPLIER = 0.5;
const MAX_OPACITY_MULTIPLIER = 1.5;
const MIN_OPACITY_FALLBACK = 0.3;
const PROXIMITY_MULTIPLIER = 1.2;
const PROXIMITY_OPACITY_BOOST = 0.8;

export interface MouseEffectCardProps {
  className?: string;
  children?: React.ReactNode;
  dotSize?: number;
  dotSpacing?: number;
  repulsionRadius?: number;
  repulsionStrength?: number;
  title?: string;
  subtitle?: string;
  topText?: string;
  topSubtext?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  footerText?: string;
}

interface Dot {
  id: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  opacity: number;
}

interface DotComponentProps {
  dot: Dot;
  index: number;
  dotSize: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  repulsionRadius: number;
  repulsionStrength: number;
}

function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateDots(width: number, height: number, spacing: number): Dot[] {
  const dots: Dot[] = [];
  const cols = Math.ceil(width / spacing);
  const rows = Math.ceil(height / spacing);
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * spacing;
      const y = row * spacing;

      // Calculate distance from center
      const dx = x - centerX;
      const dy = y - centerY;
      const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);

      // Calculate edge factor (0 at edges, 1 at center)
      const edgeFactor = Math.min(distanceFromCenter / (maxDistance * 0.7), 1);

      // Skip dots near edges with probability based on distance
      if (Math.random() > edgeFactor) {
        continue;
      }

      const pattern = (row + col) % 3;
      const baseOpacities = [0.3, 0.5, 0.7];
      const opacity = baseOpacities[pattern] * edgeFactor;

      dots.push({
        id: `dot-${row}-${col}`,
        x,
        y,
        baseX: x,
        baseY: y,
        opacity
      });
    }
  }

  return dots;
}

function DotComponent({
  dot,
  index,
  dotSize,
  mouseX,
  mouseY,
  repulsionRadius,
  repulsionStrength
}: DotComponentProps) {
  const posX = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.cos(angle) * force;
    }

    return 0;
  });

  const posY = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) {
      return 0;
    }

    const dx = dot.baseX - mx;
    const dy = dot.baseY - my;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repulsionRadius) {
      const force = (1 - distance / repulsionRadius) * repulsionStrength;
      const angle = Math.atan2(dy, dx);
      return Math.sin(angle) * force;
    }

    return 0;
  });

  const opacityBoost = useTransform([mouseX, mouseY], () => {
    const mx = mouseX.get();
    const my = mouseY.get();

    if (!Number.isFinite(mx) || !Number.isFinite(my)) return 0;

    const distance = calculateDistance(dot.baseX, dot.baseY, mx, my);
    const maxDistance = repulsionRadius * PROXIMITY_MULTIPLIER;

    if (distance < maxDistance) {
      const proximityFactor = 1 - distance / maxDistance;
      return proximityFactor * PROXIMITY_OPACITY_BOOST;
    }

    return 0;
  });

  const x = useSpring(posX, SPRING_CONFIG);
  const y = useSpring(posY, SPRING_CONFIG);

  const baseMinOpacity = Math.max(
    dot.opacity * MIN_OPACITY_MULTIPLIER,
    MIN_OPACITY_FALLBACK
  );
  const baseMaxOpacity = Math.min(dot.opacity * MAX_OPACITY_MULTIPLIER, 1);

  const minOpacityWithBoost = useTransform(opacityBoost, (boost) =>
    Math.min(baseMinOpacity + boost, 1)
  );

  const delay = (index * OPACITY_DELAY_STEP) % OPACITY_DELAY_CYCLE;

  return (
    <motion.div
      className='absolute rounded-full bg-zinc-400 will-change-transform dark:bg-zinc-600'
      style={{
        width: dotSize,
        height: dotSize,
        left: dot.baseX,
        top: dot.baseY,
        x,
        y,
        opacity: useSpring(minOpacityWithBoost, {
          stiffness: 150,
          damping: 25
        })
      }}
      initial={{ opacity: baseMinOpacity }}
      animate={{
        opacity: [baseMinOpacity, baseMaxOpacity, baseMinOpacity]
      }}
      transition={{
        opacity: {
          duration: OPACITY_DURATION_BASE + (index % 4) * OPACITY_DURATION_VARIATION,
          repeat: Infinity,
          ease: OPACITY_EASE,
          delay,
          times: [0, 0.5, 1]
        }
      }}
    />
  );
}

export function MouseEffectCard({
  dotSize = 2,
  dotSpacing = 16,
  repulsionRadius = 80,
  repulsionStrength = 20,
  children
}: MouseEffectCardProps) {
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const updateDots = () => {
      if (!innerContainerRef.current) return;
      const rect = innerContainerRef.current.getBoundingClientRect();
      const newDots = generateDots(rect.width, rect.height, dotSpacing);
      setDots(newDots);
    };

    updateDots();

    const resizeObserver = new ResizeObserver(updateDots);
    if (innerContainerRef.current) {
      resizeObserver.observe(innerContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [dotSpacing]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerContainerRef.current) return;

    const rect = innerContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
  };

  return (
    <div>
      {dots.map((dot, index) => (
        <DotComponent
          key={dot.id}
          dot={dot}
          index={index}
          dotSize={dotSize}
          mouseX={mouseX}
          mouseY={mouseY}
          repulsionRadius={repulsionRadius}
          repulsionStrength={repulsionStrength}
        />
      ))}
    </div>
  );
}
