import type { Post } from '@/types';
import { formatDate } from '@/lib/time';
import Layout from '@/components/Layout';
import ReactMarkdown from 'react-markdown';
import { m as motion } from 'framer-motion';
import { buildShareUrls } from '@/lib/share';
import { GiCoffeeMug } from 'react-icons/gi';
import { FaGrinHearts } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';
import { _post as Container } from '@/styles/routes/_post';
import { generateTableOfContents, getPaths, getPost } from '@/lib/processor';

type Props = { post: Post; tableOfContents: any };

export default function Post({ post, tableOfContents }: Props) {
  console.log(tableOfContents);

  const anchors = buildShareUrls({
    title: post?.title || '',
    excerpt: post?.excerpt || '',
    slug: post?.slug || ''
  });

  return (
    <Layout metadata={{ title: 'Kain Portfolio' }}>
      <Container className='wrapper'>
        <div className='main-container'>
          <article>
            <section className={'meta-container'}>
              <h5>{formatDate(post.createdAt)}</h5>
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
              <h1 title={post.title}>
                <strong>{post.title}</strong>
              </h1>
              <img
                className='article-image'
                src={post.image}
                alt={post.title}
              />

              <h4>{post.excerpt}</h4>
            </section>

            <ReactMarkdown className='content'>{post.content}</ReactMarkdown>

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
                <HiDotsHorizontal className='dots' />
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
                <HiDotsHorizontal className='dots' />
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
