'use client';

import { buildShareUrls } from '@/lib/share';
import { motion } from '@/providers/framer-provider';

type Props = { title: string; excerpt: string; slug: string };

export default function SocialShare({ title, excerpt, slug }: Props) {
  const anchors = buildShareUrls({
    title,
    excerpt,
    slug
  });

  return (
    <section className='flex justify-end gap-5 items-center'>
      <span className='font-medium' >Share:</span>
      <div className='flex gap-3 items-center'>
        {anchors.map((option) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href={option.url}
            title={option.name}
            target={'_blank'}
            rel={'noreferrer noopener'}
            key={option.name}
            className='bg-primary/[.15] backdrop-blur-md rounded-full w-[34px] h-[34px] grid place-content-center p-1'>
            <option.icon className='stroke-primary w-auto h-5' />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
