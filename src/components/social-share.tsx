'use client';

import { buildShareUrls } from '@/lib/share-urls';
import { m as motion } from 'framer-motion';
import type { FC } from 'react';

type Props = { title: string; excerpt: string; slug: string };

export const SocialShare: FC<Props> = ({ title, excerpt, slug }) => {
  const anchors = buildShareUrls({
    title,
    excerpt,
    slug
  });

  return (
    <section className='flex items-center justify-end gap-5'>
      <span className='font-medium'>Share:</span>
      <div className='flex items-center gap-3'>
        {anchors.map((option) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href={option.url}
            title={option.name}
            target={'_blank'}
            rel={'noreferrer noopener'}
            key={option.name}
            className='grid h-[34px] w-[34px] place-content-center rounded-full bg-primary/[.15] p-1 backdrop-blur-md'>
            <option.icon className='h-5 w-auto stroke-primary' />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
