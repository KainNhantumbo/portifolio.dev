import { ContentRenderer } from '@/components/content-renderer';
import { SocialShare } from '@/components/social-share';
import { TableOfContents } from '@/components/table-of-contents';
import { getPost } from '@/lib/posts-processor';
import { formatDate } from '@/lib/utils';
import { AUTHOR } from '@/shared/constants';
import { DotIcon } from 'lucide-react';
import Image from 'next/image';
import { readingTime } from 'reading-time-estimator';

type Props = { params: { slug: string } };

export default function Page({ params: { slug } }: Props) {
  const post = getPost(decodeURIComponent(slug));
  const readTime = readingTime(post.content, undefined, 'en');

  return (
    <section className='wrapper w-full px-2 pt-20 flex flex-col gap-7'>
      <div className='grid grid-cols-1 gap-1 items-center max-w-[980px] self-center mx-auto'>
        <article className='w-full font-sans-body px-10 pb-0 pt-7 max-[620px]:px-5 max-[620px]:py-7'>
          <section className='flex flex-col gap-2 font-sans-body'>
            <h5 className='text-sm font-medium uppercase'>
              published: {formatDate(post.createdAt)}
            </h5>
            <section className='flex items-center py-3 gap-5'>
              <Image
                width={580}
                height={580}
                priority={false}
                src={AUTHOR.picture}
                alt='Article author picture'
                className='base-border w-auto h-auto max-w-[50px] rounded-full'
              />
              <div className='flex flex-col text-sm'>
                <span>{AUTHOR.name}</span>
                <span className='font-medium'>{AUTHOR.description}</span>
              </div>
            </section>

            <SocialShare
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
            />

            <div className='flex flex-wrap flex-row items-center text-sm'>
              <span>
                <i className='font-medium'>Read:</i>{' '}
                {readTime.minutes < 1
                  ? 'Less than a minute'
                  : `${readTime.minutes} minutes`}
              </span>
              <DotIcon className='stroke-primary w-8 h-8 p-0 m-0' />
              <span>
                <i className='font-medium'>Words:</i> {readTime.words}
              </span>
              <DotIcon className='stroke-primary w-8 h-8 p-0 m-0' />
              <span>
                <i className='font-medium'>Characters:</i> {post.content.length}
              </span>
            </div>

            <h1 className='font-slab leading-relaxed'>
              <strong>{post.title}</strong>
            </h1>

            <div className='w-fit'>
              <p className='base-border rounded-3xl bg-black text-white font-medium px-3 uppercase text-[.95rem] font-sans-display mt-2'>
                {post.topic}
              </p>
            </div>

            <h4 className='font-sans-display font-medium my-3 mx-auto w-full max-w-[1000px]'>
              {post.excerpt}
            </h4>
          </section>

          <TableOfContents content={post.content} />

          <ContentRenderer>{post.content}</ContentRenderer>
        </article>
      </div>
    </section>
  );
}
