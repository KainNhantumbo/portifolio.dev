import { Post } from '@/types';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getPosts } from '@/lib/processor';
import { useEffect, useState } from 'react';
import { _blog as Container } from '@/styles/_blog';
import { FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type Props = { posts: Post[] };

export default function Blog({ posts }: Props) {
  const router = useRouter();
  const POSTS_PER_PAGE: number = 8;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagePosts, setPagePosts] = useState<Post[]>([]);

  // defines how many posts to display on each page
  const realocatePosts = (): void => {
    const page = Number(router.query.page) || 1;
    const start = page === 1 ? undefined : POSTS_PER_PAGE * page - POSTS_PER_PAGE;
    const end = page === totalPages ? undefined : page * 2;
    if (page === 1) return setPagePosts(() => posts.slice(0, POSTS_PER_PAGE));
    return setPagePosts(() => posts.slice(start, end));
  };

  useEffect((): void => {
    realocatePosts();
    setCurrentPage(() => Number(router.query.page) || 1);
  }, [router.query]);

  return (
    <Layout>
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
              {pagePosts.map((post, index) => (
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
            <section className='pagination'>
              <button
                className={currentPage == 1 ? 'btn-none' : 'prev-btn'}
                onClick={() => {
                  setCurrentPage((value) => {
                    if (value > 1) {
                      router.push(`/?page=${value - 1}`);
                      return value - 1;
                    }
                    return value;
                  });
                  realocatePosts();
                }}>
                <HiChevronLeft />
                <span>Previous</span>
              </button>
              <span>
                {currentPage} of {totalPages}
              </span>
              <button
                className={currentPage == totalPages ? 'btn-none' : 'prev-btn'}
                onClick={() => {
                  setCurrentPage((value) => {
                    if (value < totalPages) {
                      router.push(`/?page=${value + 1}`);
                      realocatePosts();
                      return value + 1;
                    }
                    return value;
                  });
                }}>
                <HiChevronRight />
                <span>Next</span>
              </button>
            </section>
          </article>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  return { props: { posts } };
}
