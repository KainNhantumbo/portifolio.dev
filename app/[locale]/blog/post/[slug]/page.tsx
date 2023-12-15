import Image from 'next/image';
import { formatDate } from '@/lib/time';
import ReactMarkdown from 'react-markdown';
// import { motion } from '@/providers/framer-provider';
import { buildShareUrls } from '@/lib/share';
import { readingTime } from 'reading-time-estimator';
import { _post as Container } from '@/styles/routes/_post';
import { getPaths, getPost } from '@/lib/processor';
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TableOfContents, { transformChild } from '@/components/TableOfContents';
import { AUTHOR } from '@/shared/constants';
import { DotIcon } from 'lucide-react';

type Props = { params: { slug: string } };

export async function generateStaticPaths() {
  const paths = getPaths();
  return { paths, fallback: false };
}

export default function Page({ params: { slug } }: Props) {
  const post = getPost(slug);

  const anchors = buildShareUrls({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug
  });

  const readTime = readingTime(post.content, undefined, 'en');

  return (
    <Container className='wrapper'>
      <div className='main-container'>
        <article>
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
            <section className='share-options'>
              <div className='title'>Share:</div>
              <div className='options'>
                {/* {anchors.map((option) => (
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
                ))} */}
              </div>
            </section>
            <div className='read-time'>
              <span>
                <i>Read:</i> {readTime.minutes < 1 ? 'Less than a minute' : `${readTime.minutes} minutes`}
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
            <div className='topic bg-foreground'>
              <p>{post.topic}</p>
            </div>

            <h4>{post.excerpt}</h4>
          </section>

          <TableOfContents content={post.content} />

          <ReactMarkdown
            className='content'
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    style={hopscotch}
                    language={match[1]}
                    wrapLongLines={true}
                    ref={undefined}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
              h2(props) {
                const { children, ...rest } = props;
                return (
                  <h2 {...rest} id={transformChild(String(children))}>
                    {children}
                  </h2>
                );
              },
              h3(props) {
                const { children, ...rest } = props;
                return (
                  <h2 {...rest} id={transformChild(String(children))}>
                    {children}
                  </h2>
                );
              },
              h4(props) {
                const { children, ...rest } = props;
                return (
                  <h4 {...rest} id={transformChild(String(children))}>
                    {children}
                  </h4>
                );
              },
              h5(props) {
                const { children, ...rest } = props;
                return (
                  <h5 {...rest} id={transformChild(String(children))}>
                    {children}
                  </h5>
                );
              },
              h6(props) {
                const { children, ...rest } = props;
                return (
                  <h6 {...rest} id={transformChild(String(children))}>
                    {children}
                  </h6>
                );
              }
            }}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  );
}
