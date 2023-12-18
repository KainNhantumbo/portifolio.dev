import Image from 'next/image';
import { formatDate } from '@/lib/time';
import TableOfContents from '@/components/TableOfContents';
import { readingTime } from 'reading-time-estimator';
import { _post as Container } from '@/styles/routes/_post';
import { getPaths, getPost } from '@/lib/processor';
import { AUTHOR } from '@/shared/constants';
import { DotIcon } from 'lucide-react';
import SocialShare from '@/components/SocialShare';
import ContentRenderer from '@/components/ContentRenderer';

type Props = { params: { slug: string } };

export async function generateStaticPaths() {
  const paths = getPaths();
  return { paths, fallback: false };
}

export default function Page({ params: { slug } }: Props) {
  const post = getPost(slug);
  const readTime = readingTime(post.content, undefined, 'en');

  return (
    <Container className='wrapper'>
      <div className='main-container'>
        <article className='w-full  font-sans-body'>
          <section className={'meta-container font-sans'}>
            <h5>PUBLISHED: {formatDate(post.createdAt)}</h5>
            <section className='author'>
              <Image
                width={580}
                height={580}
                priority={false}
                src={AUTHOR.picture}
                alt='Article author picture'
              />
              <div>
                <span>{AUTHOR.name}</span>
                <span className='description'>{AUTHOR.description}</span>
              </div>
            </section>

            <SocialShare
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
            />

            <div className='read-time'>
              <span>
                <i>Read:</i>{' '}
                {readTime.minutes < 1
                  ? 'Less than a minute'
                  : `${readTime.minutes} minutes`}
              </span>
              <DotIcon />
              <span>
                <i>Words:</i> {readTime.words}
              </span>
              <DotIcon />
              <span>
                <i>Characters:</i> {post.content.length}
              </span>
            </div>
            <h1>
              <strong>{post.title}</strong>
            </h1>
            <div className=' w-fit'>
              <p className='base-border rounded-3xl bg-black text-white font-medium px-3 uppercase text-[.95rem] font-sans-display'>
                {post.topic}
              </p>
            </div>

            <h4>{post.excerpt}</h4>
          </section>

          <TableOfContents content={post.content} />

          <ContentRenderer>{post.content}</ContentRenderer>
        </article>
      </div>
    </Container>
  );
}
