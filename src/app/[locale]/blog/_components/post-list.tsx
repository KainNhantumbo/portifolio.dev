'use client';

import type { Post } from '@/types';
import * as React from 'react';
import PostCard from './post-card';

interface Props {
  posts: Post[];
  locale: string;
}

const PostList = ({ posts, locale }: Props) => {
  return (
    <article className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center gap-3 pt-5'>
      <section className='grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} locale={locale} />
        ))}
      </section>
    </article>
  );
};

export default React.memo(PostList);
