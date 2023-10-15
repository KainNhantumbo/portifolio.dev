import Package from '@/../package.json';
import { useRouter } from 'next/router';
import { _errorPage as Container } from '@/styles/_error-page';

export default function NotFoundError() {
  const router = useRouter();
  return (
    <Container>
      <section className='logo-container'>
        <div className='logo'>
          <span>{Package.website_name}</span>
        </div>
      </section>
      <section className='content-container'>
        <h1>404</h1>
        <h2>Ooops! That's an error: Page Not Found...</h2>
        <p>Sorry, but the page you're looking for does not exist.</p>
        <button onClick={() => router.back()}>Get back</button>
      </section>
    </Container>
  );
}
