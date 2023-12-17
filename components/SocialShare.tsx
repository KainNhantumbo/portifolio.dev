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
    <section className='share-options'>
      <div className='title'>Share:</div>
      <div className='options'>
        {anchors.map((option) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            href={option.url}
            title={option.name}
            target={'_blank'}
            rel={'noreferrer noopener'}
            key={option.name}>
            <option.icon />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
