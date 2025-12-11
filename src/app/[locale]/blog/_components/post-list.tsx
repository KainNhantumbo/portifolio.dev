'use client';

import { AnimatedTextFlip } from '@/components/animations/animate-text-flip';
import type { Post } from '@/types';
import * as React from 'react';
import PostCard from './post-card';

interface Props {
  posts: Post[];
  locale: string;
}

const titleWords: string[] = ['Notebook', 'Book', 'Posts', 'Notes', 'Annotations'];

const PostList = ({ posts, locale }: Props) => {
  return (
    <section className='space-y-6'>
      <h2 className='text-center font-slab text-xl uppercase leading-relaxed md:text-4xl lg:text-5xl xl:text-6xl'>
        Meet my
        <AnimatedTextFlip words={titleWords} />
      </h2>

      <article className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
        <section className='grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} locale={locale} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default React.memo(PostList);
