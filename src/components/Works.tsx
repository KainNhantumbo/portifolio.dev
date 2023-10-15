import { StaticImageData } from 'next/image';
import { useTranslation } from 'react-i18next';
import { _works as Container } from '../styles/components/works';

type Work = {
  title: string;
  image: StaticImageData;
  repository: { label: string; url: string };
  livePreview: { label: string; url: string };
  description: string;
};

export default function Works() {
  const { t: translation } = useTranslation();
  
  const data: Work[] = [];

  return <Container id='projects'>
    
  </Container>;
}
