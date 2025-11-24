'use client';

import { useIsClient } from '@uidotdev/usehooks';
import { useTheme } from 'next-themes';
import React, { useMemo } from 'react';

const generateShadows = (n: number, currentColor: string) => {
  let value = `${Math.random() * 2000}px ${Math.random() * 2000}px ${currentColor}`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px ${currentColor}`;
  }
  return value;
};

export const StarBackground: React.FC = () => {
  const { theme } = useTheme();
  const currentColor = useMemo(() => (theme === 'dark' ? '#FFF' : '#000'), [theme]);
  const canRender = useIsClient();

  const { shadowsSmall, shadowsMedium, shadowsBig } = useMemo(() => {
    return {
      shadowsSmall: generateShadows(700, currentColor),
      shadowsMedium: generateShadows(200, currentColor),
      shadowsBig: generateShadows(100, currentColor)
    };
  }, [currentColor]);

  if (!canRender) return null;

  return (
    <div className='absolute inset-0 z-0 h-full w-full overflow-hidden'>
      <style>{`
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }

        .star-layer-small {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${shadowsSmall};
          animation: animStar 50s linear infinite;
        }
        .star-layer-small::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${shadowsSmall};
        }

        .star-layer-medium {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${shadowsMedium};
          animation: animStar 100s linear infinite;
        }
        .star-layer-medium::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${shadowsMedium};
        }

        .star-layer-big {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${shadowsBig};
          animation: animStar 150s linear infinite;
        }
        .star-layer-big::after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${shadowsBig};
        }
      `}</style>

      <div className='star-layer-small absolute rounded-full'></div>
      <div className='star-layer-medium absolute rounded-full'></div>
      <div className='star-layer-big absolute rounded-full'></div>
    </div>
  );
};
