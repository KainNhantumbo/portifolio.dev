import {
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiPinterestFill,
  RiTwitterXFill
} from 'react-icons/ri';
import Package from '../../package.json';

type Props = { slug: string; excerpt: string; title: string };

export function buildShareUrls({ slug, title, excerpt }: Props) {
  const { url } = Package;

  return [
    {
      name: 'Share on LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}/${slug}&title=${title}&summary=${excerpt}`,
      icon: RiLinkedinFill
    },
    {
      name: 'Share on Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}/${slug}`,
      icon: RiFacebookCircleFill
    },
    {
      name: 'Share on Twitter',
      url: `https://twitter.com/intent/tweet?text=${url}/${slug}`,
      icon: RiTwitterXFill
    },
    {
      name: 'Share on Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${url}/${slug}&media=${url}/${slug}&description=${excerpt}`,
      icon: RiPinterestFill
    }
  ];
}
