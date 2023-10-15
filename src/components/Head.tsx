import Head from 'next/head';
import { HeadProps } from '@/types';
import Package from '../../package.json';

export default function (props: HeadProps) {
  const { url, website_name } = Package;

  return (
    <Head>
      <meta
        name='robots'
        content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
      />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={props?.title || 'Codenut.dev'} />
      <meta property='og:site_name' content={website_name} />
      <meta property='og:created_time' content={props?.createdAt} />
      <meta property='og:updated_time' content={props?.updatedAt} />
      <meta property='article:published_time' content={props?.createdAt} />
      <meta property='article:modified_time' content={props?.updatedAt} />
      <link rel='icon' type='image/png' href='/assets/path36.png' />
      <meta name='author' content='Kain Nhantumbo' />
      <meta name='description' content='Kain Nhantumbo Portfolio and Blog' />
      <meta property='og:locale' content='en_US' />
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta name='mobile-web-app-capable' content='no' />
      <meta property='og:type' content='website' />
      <meta name='theme-color' content='#fff' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>{props?.title || 'Codenut.dev'}</title>
    </Head>
  );
}
