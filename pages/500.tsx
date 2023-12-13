import Package from '../package.json';
import { useRouter } from 'next/router';
import { _errorPage as Container } from '../styles/_error-page';

export default function InternalServerError() {
  const router = useRouter();
  return (
    <Container>
      <section className='logo-container'>
        <div className='logo'>
          <span>{Package.website_name}</span>
        </div>
      </section>
      <section className='content-container'>
        <h1>500</h1>
        <h2>Ooops! That's an error: internal server error...</h2>
        <p>Sorry, but looks like something wrong happened on the server.</p>
        <button onClick={() => router.reload()}>Retry</button>
      </section>
    </Container>
  );
}
