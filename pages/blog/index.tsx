import Link from 'next/link';
import { Post } from '@/types';
import { getPosts } from '@/lib/processor';
import { _blog as Container } from '@/styles/routes/_blog';
import { formatDate } from '@/lib/time';
import FeedGenerator from '@/lib/feed';
import { useRouter } from 'next/router';
import { RssIcon } from 'lucide-react';

type Props = { posts: Post[] };
const dfg = 'fgdfg';

export default function Blog({ posts }: Props) {
  const { locale } = useRouter();
  return (
    <Container>
      <section className='presentation-container'>
        <h1>
          Codenut<i>.dev</i> Blog
          <a href='/rss/feed.en.xml' target='_blank' title='RSS Feed'>
            <RssIcon />
          </a>
        </h1>

        <div>
          <h3>👋 Hello, Welcome to Kain's Universe!</h3>
          <p>
            You've stumbled upon Kain's little corner of the internet, where
            everything runs rampant and normal is just a unpredictable wave on a
            ocean.
          </p>
          <p>
            Web development is my favorite flavour and I love to code. I blog
            about coding, software, my projects and works. Feel free to dive in,
            here every visit is an adventure, a glance on exploration!
          </p>
        </div>
      </section>

      <article>
        <section className='posts-container'>
          {posts.map((post, index) => (
            <Link
              href={`/${locale}/blog/post/${post.slug}`}
              locale={'en'}
              key={index.toString()}>
              <div className='header-container'>
                <h3>{post.topic}</h3>
                <h4>
                  <span>{formatDate(post.createdAt)}</span>
                </h4>
              </div>

              <h3 className='title'>{post.title}</h3>
              <p className='excerpt'>{post.excerpt}</p>
            </Link>
          ))}
        </section>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getPosts();
  new FeedGenerator().generate();
  return { props: { posts: posts ?? [] } };
}