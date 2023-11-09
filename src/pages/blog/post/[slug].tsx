import type { Post } from '@/types';
import remarkGfm from 'remark-gfm';
import { formatDate } from '@/lib/time';
import Layout from '@/components/Layout';
import ReactMarkdown from 'react-markdown';
import { m as motion } from 'framer-motion';
import { buildShareUrls } from '@/lib/share';
import { RiCircleFill } from 'react-icons/ri';
import { readingTime } from 'reading-time-estimator';
import { _post as Container } from '@/styles/routes/_post';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getPaths, getPost } from '@/lib/processor';
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import TableOfContents, { transformChild } from '@/components/TableOfContents';
import { AUTHOR } from '@/lib/constants';

type Props = { post: Post };

export default function Post({ post }: Props) {
  const anchors = buildShareUrls({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug
  });

  const readTime = readingTime(post.content, undefined, 'en');

  return (
    <Layout metadata={{ title: 'Kain Portfolio' }}>
      <Container className='wrapper'>
        <div className='main-container'>
          <article>
            <section className={'meta-container'}>
              <h5>PUBLISHED: {formatDate(post.createdAt)}</h5>
              <section className='author'>
                <LazyLoadImage
                  effect='blur'
                  src={AUTHOR.picture}
                  placeholderSrc={AUTHOR.picturePlaceholder}
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
              <div className='read-time'>
                <span>
                  <i>Read:</i> {readTime.minutes < 2 ? 'minute' : 'minutes'}
                </span>
                <RiCircleFill />
                <span>
                  <i>Words:</i> {readTime.words}
                </span>
                <RiCircleFill />
                <span>
                  <i>Characters:</i> {post.content.length}
                </span>
              </div>
              <h1>
                <strong>{post.title}</strong>
              </h1>
              <div className='topic'>
                <p>{post.topic}</p>
              </div>

              <h4>{post.excerpt}</h4>
            </section>

            <TableOfContents content={post.content} />

            <ReactMarkdown
              className='content'
              remarkPlugins={[remarkGfm]}
              children={post.content}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      children={String(children).replace(/\n$/, '')}
                      style={hopscotch}
                      language={match[1]}
                      wrapLongLines={true}
                      ref={undefined}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
                h2(props) {
                  const { id, children, ...rest } = props;
                  return (
                    <h2 {...rest} id={transformChild(String(children))}>
                      {children}
                    </h2>
                  );
                },
                h3(props) {
                  const { id, children, ...rest } = props;
                  return (
                    <h2 {...rest} id={transformChild(String(children))}>
                      {children}
                    </h2>
                  );
                },
                h4(props) {
                  const { id, children, ...rest } = props;
                  return (
                    <h4 {...rest} id={transformChild(String(children))}>
                      {children}
                    </h4>
                  );
                },
                h5(props) {
                  const { id, children, ...rest } = props;
                  return (
                    <h5 {...rest} id={transformChild(String(children))}>
                      {children}
                    </h5>
                  );
                },
                h6(props) {
                  const { id, children, ...rest } = props;
                  return (
                    <h6 {...rest} id={transformChild(String(children))}>
                      {children}
                    </h6>
                  );
                }
              }}
            />
          </article>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPaths();
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const post = getPost(context.params.slug);
  return { props: { post } };
}
