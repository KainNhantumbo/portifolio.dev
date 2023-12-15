'use client';

import Image from 'next/image';
import { useWorks } from '../hooks/useWorks';
import { _works as Container } from '../styles/modules/_works';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { useScopedI18n } from '@/locales/client';

export default function Works() {
  const translation = useScopedI18n('works');
  const data = useWorks();

  return (
    <Container>
      {data.map((item, index) => (
        <div key={index} className='item-container'>
          <div className='content-container'>
            <h3 className='font-sans mx-auto font-semibold uppercase text-lg'>
              {item.title}
            </h3>
            <div className='font-sans '>
              {item.description.map((phrase, index) => (
                <p key={index} className='mb-3'>
                  {phrase}
                </p>
              ))}
            </div>
            <div className='platforms-container font-sans'>
              <h4 className='font-semibold'>{translation('platform')}: </h4>
              {item.platforms.map((platform, index) => (
                <span
                  key={index}
                  className='border-primary  border-dashed border-[1px]'>
                  {platform}
                </span>
              ))}
            </div>
            <div className='stack-container font-sans'>
              <h4 className='font-semibold'>{translation('stack')}: </h4>
              {item.stack.map((platform, index) => (
                <span
                  key={index}
                  className='border-primary  border-dashed border-[1px]'>
                  {platform}
                </span>
              ))}
            </div>

            <div className='flex gap-3 flex-wrap items-center w-full font-sans'>
              <a
                href={item.livePreview.url}
                rel='noopener noreferrer'
                target='_blank'
                className='group flex items-center gap-2 underline-offset-4 underline decoration-dashed hover:text-primary transition-colors'>
                <ExternalLinkIcon className='h-auto w-4 group-hover:stroke-primary' />
                <span className='font-semibold group-hover:text-primary'>
                  {item.livePreview.label}
                </span>
              </a>
              <a
                href={item.repository.url}
                rel='noopener noreferrer'
                target='_blank'
                className='group flex items-center gap-2 underline-offset-4 underline decoration-dashed hover:text-primary transition-colors'>
                <GithubIcon className='h-auto w-4 group-hover:stroke-primary' />
                <span className='font-semibold group-hover:text-primary'>
                  {item.repository.label}
                </span>
              </a>
            </div>
          </div>
          <Image
            width={500}
            height={undefined}
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
    </Container>
  );
}
