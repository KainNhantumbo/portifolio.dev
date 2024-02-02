import {
  FacebookIcon,
  LinkedinIcon,
  ShareIcon,
  TwitterIcon
} from 'lucide-react';
import Package from '../package.json';

type Props = { slug: string; excerpt: string; title: string };

export const buildShareUrls = ({ slug, title, excerpt }: Props) => {
  const { url } = Package;

  return [
    {
      name: 'Share on LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}/${slug}&title=${title}&summary=${excerpt}`,
      icon: LinkedinIcon
    },
    {
      name: 'Share on Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}/${slug}`,
      icon: FacebookIcon
    },
    {
      name: 'Share on Twitter',
      url: `https://twitter.com/intent/tweet?text=${url}/${slug}`,
      icon: TwitterIcon
    },
    {
      name: 'Share on Pinterest',
      url: `https://pinterest.com/pin/create/button/?url=${url}/${slug}&media=${url}/${slug}&description=${excerpt}`,
      icon: ShareIcon
    }
  ];
};
