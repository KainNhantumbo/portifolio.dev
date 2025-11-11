'use client';

import { cn } from '@/lib/utils';
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

const icons = [Mail, RocketIcon, SparklesIcon, AppWindowIcon, CodeIcon, UserIcon];

export const Services = () => {
  const translation = useScopedI18n('services');

  const data = useMemo(() => {
    return Array.from(icons).map((icon, index) => ({
      title: translation(`types.${index}.title`, { count: index }),
      content: translation(`types.${index}.content`, { count: index }),
      icon: icon
    }));
  }, [translation]);

  return (
    <section
      id='services'
      className='mx-auto flex w-full max-w-[1280px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
      <h2 className='base-section-title'>
        <RocketIcon />
        <span>{translation('title')}</span>
      </h2>
      <h3 className='mb-3 w-full max-w-xl text-center font-medium'>
        {translation('subtitle')}
      </h3>

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
        <div className='space-y-6 lg:space-y-12'>
          {data.slice(0, 3).map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              content={service.content}
              icon={service.icon}
              size='small'
            />
          ))}
        </div>

        <div className='space-y-6 lg:space-y-12'>
          {data.slice(3, 6).map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              content={service.content}
              icon={service.icon}
              size='large'
            />
          ))}
        </div>
      </div>

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

interface ServiceCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
  size: 'small' | 'large';
}

export function ServiceCard({ title, content, icon: Icon, size }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'base-border relative w-full max-w-md overflow-hidden rounded-3xl bg-foreground p-12',
        size === 'large' && 'mt-12 lg:mt-24'
      )}>
      <div className='relative z-10 flex flex-col items-center text-center'>
        <div className='mb-6'>
          <div
            className={`flex items-center justify-center rounded-full p-4 shadow-lg ring-8 ring-font/10`}>
            <div className='flex h-auto w-12 items-center justify-center text-white'>
              <Icon className='h-auto w-12 stroke-primary transition-colors' />
            </div>
          </div>
        </div>

        <h3 className='mb-3 font-sans text-xl font-bold'>{title}</h3>
        <p className='font-sans text-base leading-relaxed'>{content}</p>
      </div>
    </div>
  );
}
