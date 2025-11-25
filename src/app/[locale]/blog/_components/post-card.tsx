'use client';

import { SparklesCore } from '@/components/animations/animate-sparkles';
import { GlowCard } from '@/components/glow-card';
import { AnimatedBadge, getRandomTwBaseColor } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { Post } from '@/types';
import { useHover } from '@uidotdev/usehooks';
import Link from 'next/link';

interface Props {
  post: Post;
  locale?: string;
}

export function PostCard({ post, locale }: Props) {
  const [ref, hovering] = useHover();

  return (
    <div ref={ref} className='h-full'>
      <GlowCard
        customSize
        useRandomTwColors
        className='group relative flex h-full min-h-96 flex-col justify-between'>
        {hovering && (
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={4}
            particleDensity={40}
            className='absolute left-0 top-0 -z-50 h-full w-full'
            particleColor='#555555'
          />
        )}

        <section className='space-y-6'>
          <div className='flex flex-row items-center justify-between gap-1'>
            <AnimatedBadge
              animateBorder={true}
              gradientFrom={getRandomTwBaseColor()}
              gradientTo={getRandomTwBaseColor()}>
              <span className='uppercase'>{post.topic}</span>
            </AnimatedBadge>

            <h4 className='font-sans font-medium uppercase'>
              {formatDate(post.createdAt)}
            </h4>
          </div>

          <h3 className='font-sans text-[1.4rem] font-medium duration-300 group-hover:text-blue-400 group-hover:transition-colors'>
            {post.title}
          </h3>
          <p className='excerpt font-sans font-medium'>{post.excerpt}</p>
        </section>

        <Link
          locale={'en'}
          href={`/${locale}/blog/post/${post.slug}`}
          className='base-border w-fit cursor-pointer rounded-full bg-foreground px-4 py-2 font-medium transition-colors duration-300 hover:bg-foreground/40 hover:text-blue-400 hover:transition-colors'>
          Read more
        </Link>
      </GlowCard>
    </div>
  );
}
