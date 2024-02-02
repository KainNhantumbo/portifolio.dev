import { transformChild } from '@/lib/utils';
import { marked } from 'marked';
import Link from 'next/link';
import type { FC } from 'react';

export const TableOfContents: FC<{ content: string }> = ({ content }) => {
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
      <nav className='flex flex-col gap-2'>
        <h2 className='font-sans-body text-xl'>Table of Contents</h2>
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              className='pl-3 list-inside'
              style={{ paddingLeft: `calc(${heading.depth}px * 8px)` }}>
              <Link
                href={`#${transformChild(heading.text)}`}
                className='group underline underline-offset-4 hover:text-primary decoration-dashed transition-colors font-medium'>
                {String(heading.text)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
