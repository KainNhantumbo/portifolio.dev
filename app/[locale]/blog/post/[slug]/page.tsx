import { ContentRenderer } from '@/components/content-renderer';
import { SocialShare } from '@/components/social-share';
import { TableOfContents } from '@/components/table-of-contents';
import { getPost } from '@/lib/posts-processor';
import { formatDate } from '@/lib/utils';
import { AUTHOR } from '@/shared/constants';
import { DotIcon } from 'lucide-react';
import Image from 'next/image';
import { readingTime } from 'reading-time-estimator';

type Props = { params: Promise<{ slug: string }> };

export default async function Page(props: Props) {
  const params = await props.params;

  const { slug } = params;

  const post = getPost(decodeURIComponent(slug));
  const readTime = readingTime(post.content, undefined, 'en');

  return (
    <section className='wrapper flex w-full flex-col gap-7 px-2 pt-20'>
      <div className='mx-auto grid max-w-[980px] grid-cols-1 items-center gap-1 self-center'>
        <article className='w-full px-10 pb-0 pt-7 font-sans-body max-[620px]:px-5 max-[620px]:py-7'>
          <section className='flex flex-col gap-2 font-sans-body'>
            <h5 className='text-sm font-medium uppercase'>
              published: {formatDate(post.createdAt)}
            </h5>
            <section className='flex items-center gap-5 py-3'>
              <Image
                width={580}
                height={580}
                priority={false}
                src={AUTHOR.picture}
                alt='Article author picture'
                className='base-border h-auto w-auto max-w-[50px] rounded-full'
              />
              <div className='flex flex-col text-sm'>
                <span>{AUTHOR.name}</span>
                <span className='font-medium'>{AUTHOR.description}</span>
              </div>
            </section>

            <SocialShare title={post.title} slug={post.slug} excerpt={post.excerpt} />

            <div className='flex flex-row flex-wrap items-center text-sm'>
              <span>
                <i className='font-medium'>Read:</i>{' '}
                {readTime.minutes < 1
                  ? 'Less than a minute'
                  : `${readTime.minutes} minutes`}
              </span>
              <DotIcon className='m-0 h-8 w-8 stroke-primary p-0' />
              <span>
                <i className='font-medium'>Words:</i> {readTime.words}
              </span>
              <DotIcon className='m-0 h-8 w-8 stroke-primary p-0' />
              <span>
                <i className='font-medium'>Characters:</i> {post.content.length}
              </span>
            </div>

            <h1 className='font-sans-display leading-relaxed'>
              <strong>{post.title}</strong>
            </h1>

            <div className='w-fit'>
              <p className='base-border mt-2 rounded-3xl bg-black px-3 font-sans-display text-[.95rem] font-medium uppercase text-white'>
                {post.topic}
              </p>
            </div>

            <h4 className='mx-auto my-3 w-full max-w-[1000px] font-sans-display font-medium'>
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
