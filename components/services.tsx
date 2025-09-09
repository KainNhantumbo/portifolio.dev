'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { Mail, RocketIcon, SparklesIcon } from 'lucide-react';

export const Services = () => {
  const translation = useScopedI18n('services');

  return (
    <section
      id='services'
      className='mx-auto flex w-full max-w-[780px] flex-col items-center gap-3 border-t-[1px] border-solid border-font/10 pt-5'>
      <h2 className='base-section-title'>
        <RocketIcon />
        <span>{translation('title')}</span>
      </h2>
      <h3 className='mb-3 w-full max-w-xl text-center font-medium'>
        {translation('subtitle')}
      </h3>

      <section className='mt-5 grid place-content-center place-items-center gap-6 mobile-x:grid-cols-2'>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((_, index) => (
          <motion.div
            key={index}
            className='base-border group relative flex h-full w-full select-none flex-col gap-3 rounded-xl border-b-[4px] border-b-primary bg-foreground p-3'
            whileHover={{ scale: 1.05 }}>
            <div className='flex flex-nowrap items-center gap-3'>
              <SparklesIcon className='' />
              <h4 className='font-bold uppercase text-primary'>
                {translation(`types.${index}.title`, { count: index })}
              </h4>
            </div>
            <p>{translation(`types.${index}.content`, { count: index })}</p>
          </motion.div>
        ))}
      </section>

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
