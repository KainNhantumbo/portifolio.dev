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
    <aside className='toc-container base-border my-2 rounded-xl bg-foreground p-3 px-4'>
      <nav className='flex flex-col gap-2'>
        <h2 className='font-sans text-xl'>Table of Contents</h2>
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              className='list-inside pl-3'
              style={{ paddingLeft: `calc(${heading.depth}px * 8px)` }}>
              <Link
                href={`#${transformChild(heading.text)}`}
                className='group font-medium underline decoration-dashed underline-offset-4 transition-colors hover:text-primary'>
                {String(heading.text)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
