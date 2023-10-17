import type { Post } from '@/types';
import remarkGfm from 'remark-gfm';
import { CSSProperties } from 'react';
import { formatDate } from '@/lib/time';
import Layout from '@/components/Layout';
import ReactMarkdown from 'react-markdown';
import { m as motion } from 'framer-motion';
import { buildShareUrls } from '@/lib/share';
import { GiCoffeeMug } from 'react-icons/gi';
import { RiCircleFill, RiMoreFill } from 'react-icons/ri';
import { readingTime } from 'reading-time-estimator';
import { _post as Container } from '@/styles/routes/_post';
import { generateTableOfContents, getPaths, getPost } from '@/lib/processor';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = { post: Post; tableOfContents: any };

const styles: CSSProperties = {
  borderRadius: '8px'
};

export default function Post({ post, tableOfContents }: Props) {
  console.log(tableOfContents);

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
                <img
                  loading='lazy'
                  decoding='async'
                  src={post.author.picture}
                  alt='article author photo'
                />
                <div>
                  <span>{post.author.name}</span>
                  <span className='description'>{post.author.description}</span>
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
                  <i>Read:</i> {readTime.minutes} minutes
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

            <ReactMarkdown
              className='content'
              children={post.content}
              remarkPlugins={[remarkGfm]}
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
                      customStyle={{ ...styles }}
                      PreTag='div'
                      ref={undefined}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                }
              }}
            />

            <section className='base-container'>
              <section className='share-options'>
                <div className='title'>Share this article:</div>
                <div className='options'>
                  {anchors.map((option) => (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
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
              <section className='support-container'>
                <RiMoreFill className='dots' />
                <h2>Has this been helpful to you?</h2>
                <p>
                  You can support my work by sharing this article with others,
                  or perhaps buy me a cup of coffee : )
                </p>
                <GiCoffeeMug className={'coffee-mug-icon'} />
                <motion.a
                  href='https://www.buymeacoffee.com/nhantumbokU'
                  target={'_blank'}
                  rel={'noreferrer noopener'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}>
                  <span>Buy me a coffee</span>
                </motion.a>
              </section>
            </section>
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
  const tableOfContents = await generateTableOfContents(context.params.slug);
  return { props: { post, tableOfContents } };
}
