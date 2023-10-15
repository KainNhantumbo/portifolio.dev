import Image, { StaticImageData } from 'next/image';
import { _works as Container } from '../styles/components/works';
import { getWorks } from '@/data/works';
import { useTranslation } from 'react-i18next';
import { RiGithubLine, RiLiveLine } from 'react-icons/ri';

export default function Works() {
  const { t: translation } = useTranslation();
  const data = getWorks();

  return (
    <Container>
      {data.map((item, index) => (
        <div key={index} className='item-container'>
          <Image
            width={300}
            height={300}
            src={item.image}
            alt={item.title}
          />
          <div className='content-container'>
            <h3 className='title'>{item.title}</h3>
            <div className='description-container'>
              {item.description.map((phrase, index) => (
                <p key={index}>{phrase}</p>
              ))}
            </div>
            <div className='platforms-container'>
              <h4>{translation('works.platform')}: </h4>
              {item.platforms.map((platform, index) => (
                <span key={index}>{platform}</span>
              ))}
            </div>
            <div className='stack-container'>
              <h4>{translation('works.stack')}: </h4>
              {item.stack.map((platform, index) => (
                <span key={index}>{platform}</span>
              ))}
            </div>

            <div className='anchors-container'>
              <a
                href={item.livePreview.url}
                rel='noopener noreferrer'
                target='_blank'>
                <RiLiveLine />
                <span>{item.livePreview.label}</span>
              </a>
              <a
                href={item.repository.url}
                rel='noopener noreferrer'
                target='_blank'>
                <RiGithubLine />
                <span>{item.repository.label}</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
