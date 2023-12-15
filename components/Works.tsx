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
            <h3 className='title'>{item.title}</h3>
            <div className='description-container'>
              {item.description.map((phrase, index) => (
                <p key={index}>{phrase}</p>
              ))}
            </div>
            <div className='platforms-container'>
              <h4>{translation('platform')}: </h4>
              {item.platforms.map((platform, index) => (
                <span key={index}>{platform}</span>
              ))}
            </div>
            <div className='stack-container'>
              <h4>{translation('stack')}: </h4>
              {item.stack.map((platform, index) => (
                <span key={index}>{platform}</span>
              ))}
            </div>

            <div className='anchors-container'>
              <a
                href={item.livePreview.url}
                rel='noopener noreferrer'
                target='_blank'>
                <ExternalLinkIcon />
                <span>{item.livePreview.label}</span>
              </a>
              <a
                href={item.repository.url}
                rel='noopener noreferrer'
                target='_blank'>
                <GithubIcon />
                <span>{item.repository.label}</span>
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
