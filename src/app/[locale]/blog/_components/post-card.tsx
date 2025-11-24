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
    <div ref={ref}>
      <GlowCard customSize useRandomTwColors className='relative'>
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
        <div className='flex flex-row items-center justify-between gap-1'>
          <AnimatedBadge
            animateBorder={true}
            gradientFrom={getRandomTwBaseColor()}
            gradientTo={getRandomTwBaseColor()}>
            <span className='uppercase'>{post.topic}</span>
          </AnimatedBadge>

          <h4 className='font-sans font-medium uppercase'>{formatDate(post.createdAt)}</h4>
        </div>

        <h3 className="relative pl-5 font-sans text-[1.4rem] font-medium underline decoration-dashed underline-offset-4 before:absolute before:left-0 before:top-[calc(50%_-_2px)] before:z-50 before:h-2 before:w-2 before:rounded-lg before:bg-primary before:content-[''] group-hover:text-blue-400 group-hover:transition-colors">
          {post.title}
        </h3>
        <p className='excerpt font-sans font-medium'>{post.excerpt}</p>
        <Link
          locale={'en'}
          href={`/${locale}/blog/post/${post.slug}`}
          className='base-border w-fit cursor-pointer rounded-full bg-foreground px-4 py-2 font-medium transition-colors duration-300 hover:bg-foreground/80'>
          Read more
        </Link>
      </GlowCard>
    </div>
  );
}
