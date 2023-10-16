import Link from 'next/link';
import { Post } from '@/types';
import Layout from '@/components/Layout';
import { getPosts } from '@/lib/processor';
import { _blog as Container } from '@/styles/routes/_blog';
import { FaCalendarAlt } from 'react-icons/fa';
import { formatDate } from '@/lib/time';

type Props = { posts: Post[] };

export default function Blog({ posts }: Props) {
  console.log(posts);

  return (
    <Layout metadata={{ title: 'Codenut.dev - Blog' }}>
      <Container>
        <section className='main-top-container'>
          <section className='banner-container'>
            <h1>
              Codenut<i>.dev</i> Blog
            </h1>

            <div>
              <h3>Hello, I am Kain, Welcome to My Blog!</h3>
              <p>
                Web development is my favorite flavour and I love to code. I
                blog about codding software and my projects.
              </p>
            </div>
          </section>
        </section>
        <div className='main-container'>
          <article>
            <section className='posts-container'>
              {posts.map((post, index) => (
                <Link
                  href={`/blog/post/${post.slug}`}
                  className='post'
                  key={index.toString()}>
                  <section className='top-container'>
                    <img src={post.image} alt={post.title} />

                    <div className='details'>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                    </div>

                    <div className='date'>
                      <FaCalendarAlt />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                  </section>
                </Link>
              ))}
            </section>
          </article>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts: posts ?? [] } };
}
