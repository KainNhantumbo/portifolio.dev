import { Post } from '@/types';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getPosts } from '@/lib/processor';
import { _blog as Container } from '@/styles/routes/_blog';
import { FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';

type Props = { posts: Post[] };

export default function Blog({ posts = [] }: Props) {
  const router = useRouter();

  return (
    <Layout metadata={{ title: 'Codenut.dev - Blog' }}>
      <Container>
        <section className='main-top-container'>
          <section className='banner-container'>
            <h1>Hello, welcome to my blog!</h1>
          </section>
        </section>
        <div className='main-container'>
          <article>
            <section className='navigator'>
              <h3>
                All Articles <span>({posts.length})</span>
              </h3>
            </section>
            <section className='posts-container'>
              {posts.map((post, index) => (
                <section className='post' key={index.toString()}>
                  <section className='top-container'>
                    <img
                      src={post.image}
                      alt={post.title}
                      onClick={() => router.push(`/post/${post.slug}`)}
                    />

                    <div className='details'>
                      <h3
                        onClick={() =>
                          router.push(`/post/${encodeURIComponent(post.slug)}`)
                        }>
                        {post.title}
                      </h3>
                      <p>{post.excerpt}</p>
                    </div>

                    <div className='date'>
                      <FaCalendarAlt />
                      <span>{post.createdAt}</span>
                    </div>
                  </section>
                  <section className='bottom-container'>
                    <button onClick={() => router.push(`/post/${post.slug}`)}>
                      <FaPaperPlane />
                      <span>Continue reading</span>
                    </button>
                  </section>
                </section>
              ))}
            </section>
          </article>
        </div>
      </Container>
    </Layout>
  );
}

