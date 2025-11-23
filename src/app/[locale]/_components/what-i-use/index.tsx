'use client';

import { AnimateMagnetism } from '@/components/animations/animate-magnetism';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import { StarBackground } from './background';
import { TOOLS } from './data';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const WhatIUse: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const icons = iconsRef.current.filter(Boolean);

      // Initial State: All icons at the center, scaled down, transparent
      gsap.set(icons, {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        left: '50%',
        top: '50%',
        xPercent: -50,
        yPercent: -50
      });

      // Create a timeline linked to the scroll position (scrub)
      // This ensures 0% -> 100% -> 0% symmetry regardless of scroll direction
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Start animation when top of section enters from bottom
          end: 'bottom top', // End animation when bottom of section leaves to top
          scrub: 1 // Smooth scrubbing (1s delay)
        }
      });

      // Phase 1: Expand (Enter)
      // Maps roughly to the first 40% of the section passing through viewport
      tl.to(icons, {
        x: (index) => `${TOOLS[index].x * 0.8}vw`,
        y: (index) => `${TOOLS[index].y * 0.6}vh`,
        scale: (index) => TOOLS[index].size,
        rotation: (index) => TOOLS[index].rotation || 0,
        opacity: 1,
        duration: 1, // Relative duration weight
        ease: 'power2.out',
        stagger: { amount: 0.1, from: 'center' }
      });

      // Phase 2: Hold (Middle)
      // Keeps them expanded while the section is centrally visible (approx 20% of scroll)
      tl.to(icons, {
        duration: 0.5
      });

      // Phase 3: Contract (Exit)
      // Maps to the last 40% of the section leaving
      tl.to(icons, {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0,
        rotation: 0,
        duration: 1, // Relative duration weight
        ease: 'power2.in',
        stagger: { amount: 0.1, from: 'edges' }
      });

      // Separate animation for the text to fade in/out nicely
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    }, containerRef);

    const handleMouseLeave = () => {
      // Reset all inner icons to center
      iconsRef.current.forEach((iconWrapper) => {
        if (!iconWrapper) return;
        const target = iconWrapper.firstElementChild as HTMLElement;
        gsap.to(target, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      ctx.revert();
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className='perspective-1000 relative flex h-screen w-full items-center justify-center overflow-hidden'>
      <StarBackground />

      {/* Vertical Fade Gradients - Blend background into adjacent sections */}
      <div className='pointer-events-none absolute left-0 top-0 z-[1] h-[20%] w-full' />
      <div className='pointer-events-none absolute bottom-0 left-0 z-[1] h-[20%] w-full' />

      {/* Central Text */}
      <div className='pointer-events-none relative z-20 select-none px-4 text-center'>
        <h2
          ref={textRef}
          className='font-slab text-5xl font-extrabold capitalize tracking-tight text-font md:text-8xl'>
          core tools
          <br />
          <span className='text-3xl capitalize md:text-5xl'>i use</span>
        </h2>
      </div>

      {/* Icons Container */}
      <div className='pointer-events-none absolute inset-0 z-10 h-full w-full'>
        {TOOLS.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              iconsRef.current[index] = el;
            }}
            className='pointer-events-auto absolute flex h-24 w-24 items-center justify-center hover:z-50'
            style={{
              willChange: 'transform, opacity'
            }}>
            <AnimateMagnetism className='base-border group relative flex overflow-hidden rounded-2xl bg-foreground/80 p-3 transition-colors duration-300'>
              <div className='grid place-items-center'>
                {/* Background Glow */}
                <div
                  className='absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-50'
                  style={{ backgroundColor: item.color }}
                />

                <item.icon size={60} />

                {/* Tooltip on Hover */}
                <div className='absolute inset-0 z-20 flex items-center justify-center bg-foreground/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                  <span className='select-none text-[10px] font-bold uppercase tracking-widest text-font'>
                    {item.name}
                  </span>
                </div>
              </div>
            </AnimateMagnetism>
          </div>
        ))}
      </div>
    </section>
  );
};
