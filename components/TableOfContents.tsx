import Link from 'next/link';
import { marked } from 'marked';

type Props = { content: string };

export const transformChild = (child: string): string =>
  child
    .replace(/ /g, '-')
    .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, '')
    .toLowerCase();

export default function TableOfContents({ content }: Props) {
  const headings = marked
    .lexer(content)
    .filter((token) => token.type === 'heading') as Array<{
    raw: string;
    depth: number;
    text: string;
  }>;

  if (headings.length < 1) return null;

  return (
    <aside className='toc-container base-border bg-foreground p-3 px-4 my-2 rounded-xl'>
      <nav className='flex flex-col gap-5'>
        <h2 className='font-sans-body'>Table of Contents</h2>
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              className='pl-3 list-inside'
              style={{ paddingLeft: `calc(${heading.depth}px * 8px)` }}>
              <Link
                href={`#${transformChild(heading.text)}`}
                className='group hover:underline hover:underline-offset-8 hover:text-primary hover:decoration-dashed transition-colors'>
                {String(heading.text)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
