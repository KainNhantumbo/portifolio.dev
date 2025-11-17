'use client';

import { MagicBento } from '@/components/animations/animate-bento';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import {
  AppWindowIcon,
  CodeIcon,
  LucideIcon,
  Mail,
  RocketIcon,
  SparklesIcon,
  UserIcon
} from 'lucide-react';
import { useMemo } from 'react';

interface ServiceCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
}

const icons = [
  { icon: Mail, color: '#EA7E5D' },
  { icon: RocketIcon, color: '#8FBC8F' },
  { icon: SparklesIcon, color: '#FF1493' },
  { icon: AppWindowIcon, color: '#00BFFF' },
  { icon: CodeIcon, color: '#FFD700' },
  { icon: UserIcon, color: '#DDA0DD' }
];

export const Services = () => {
  const translation = useScopedI18n('services');

  const data = useMemo(() => {
    return Array.from(icons).map(({ color, icon }, index) => ({
      title: translation(`types.${index}.title`, { count: index }),
      description: translation(`types.${index}.content`, { count: index }),
      icon: icon,
      color: color
    }));
  }, [translation]);

  return (
    <section
      id='services'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <SectionHeader title={translation('title')} description={translation('subtitle')} />

      <MagicBento
        textAutoHide={false}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor='255, 215, 0'
        cards={data}
      />

      <motion.a
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.03 }}
        href={'#contact'}
        className='base-border group mt-6 flex items-center gap-2 rounded-xl bg-background px-4 py-[5px] font-medium shadow-[0_0_20px_rgba(0,0,0,.06)] transition-colors'>
        <Mail className='h-5 w-auto stroke-primary transition-colors' />
        <span className='text-xl capitalize transition-colors group-hover:text-primary'>
          {translation('call-to-action')}
        </span>
      </motion.a>
    </section>
  );
};
