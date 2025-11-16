'use client';

import { GridPattern } from '@/components/grid-effect';
import { SectionHeader } from '@/components/ui/section-header';
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

interface ServiceCardProps {
  title: string;
  content: string;
  icon: LucideIcon;
}

const icons = [Mail, RocketIcon, SparklesIcon, AppWindowIcon, CodeIcon, UserIcon];

export function ServiceCard({ title, content, icon: Icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        'relative grid aspect-square w-full max-w-md select-none place-items-center overflow-hidden rounded-3xl base-border p-8 shadow-sm transition-all hover:shadow-lg'
      )}>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]'
        )}
      />

      <div className='relative z-10 flex flex-col items-center text-center'>
        <div className='mb-6'>
          <div
            className={`flex items-center justify-center rounded-full border-2 border-primary p-4 shadow-lg ring-8 ring-font/10`}>
            <div className='flex h-auto w-12 items-center justify-center text-white'>
              <Icon className='h-auto w-12 stroke-primary transition-colors' />
            </div>
          </div>
        </div>

        <h3 className='mb-3 font-sans text-2xl font-bold'>{title}</h3>
        <p className='font-sans text-lg leading-relaxed'>{content}</p>
      </div>
    </motion.div>
  );
}

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
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <SectionHeader title={translation('title')} description={translation('subtitle')} />
      <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12'>
        {data.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            content={service.content}
            icon={service.icon}
          />
        ))}
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
