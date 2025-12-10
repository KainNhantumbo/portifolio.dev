'use client';

import { MagicBento } from '@/components/animations/animate-bento';
import Button from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import {
  AppWindowIcon,
  CodeIcon,
  Mail,
  RocketIcon,
  SparklesIcon,
  UserIcon
} from 'lucide-react';
import * as React from 'react';

const icons = [
  { icon: Mail, color: '#EA7E5D' },
  { icon: RocketIcon, color: '#8FBC8F' },
  { icon: SparklesIcon, color: '#FF1493' },
  { icon: AppWindowIcon, color: '#00BFFF' },
  { icon: CodeIcon, color: '#FFD700' },
  { icon: UserIcon, color: '#DDA0DD' }
];

const Services = () => {
  const translation = useScopedI18n('services');

  const data = React.useMemo(() => {
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

      <Button
        as='a'
        variant='neon'
        size='lg'
        href={'#contact'}
        className='mt-12'
        icon={<Mail className='h-auto w-8' />}>
        {translation('call-to-action')}
      </Button>
    </section>
  );
};

export default React.memo(Services);
