import { FaGrinHearts } from 'react-icons/fa';
import type { Post } from '@/types';
import Layout from '@/components/Layout';
import ReactMarkdown from 'react-markdown';
import { m as motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getPaths, getPost } from '@/lib/processor';
import { GiCoffeeMug } from 'react-icons/gi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { _post as Container } from '@/styles/_post';
import { buildShareUrls } from '@/lib/share';

type Props = { post: Post };

export default function Post({ post }: Props) {
  const [screenPosition, setScreenPosition] = useState<number>(0);

  const anchors = buildShareUrls({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
  });

  const computePageInnerWidth = (): void => {
    const wrapper = document.querySelector('.main-container');
    if (!wrapper)
      throw new Error('Cannot get wrapper container to compute screen position.');
    const calc = (window.scrollY * 100) / wrapper.scrollHeight;
    setScreenPosition(calc);
  };

  useEffect((): (() => void) => {
    window.addEventListener('wheel', computePageInnerWidth);
    return (): void => {
      window.removeEventListener('wheel', computePageInnerWidth);
    };
  }, []);

  return (
    <Layout metadata={{ title: 'Kain Portfolio' }}>
      <Container className='wrapper'>
        <div
          style={{
            height: '4px',
            width: `${screenPosition.toString()}%`,
            backgroundColor: '#f09836',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '99999',
            transition: '200ms',
          }}
        />

        <div className='main-container'>
          <article>
            <section className={'article-header-container'}>
              <h5>{post.createdAt}</h5>
              <section className='author'>
                <img src={post.author.picture} alt='article author photo' />
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
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      href={option.url}
                      title={option.name}
                      target={'_blank'}
                      rel={'noreferrer noopener'}
                      key={option.name}>
                      {option.icon}
                    </motion.a>
                  ))}
                </div>
              </section>
              <h1 title={post.title}>
                <strong>{post.title}</strong>
              </h1>
              <img className='article-image' src={post.image} alt={post.title} />

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
                      {option.icon}
                    </motion.a>
                  ))}
                </div>
              </section>
              <section className='fund-support'>
                <HiDotsHorizontal className='dots' />
                <h2>Has this been helpful to you?</h2>
                <p>
                  You can support my work by sharing this article with others, or perhaps
                  buy me a cup of coffee
                </p>
                <FaGrinHearts className='svg-smile' />
                <motion.a
                  href='https://www.buymeacoffee.com/nhantumbokU'
                  target={'_blank'}
                  rel={'noreferrer noopener'}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}>
                  <GiCoffeeMug />
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

export async function getStaticProps({ params: { slug } }: any) {
  const post = getPost(slug);
  return { props: { ...post } };
}
