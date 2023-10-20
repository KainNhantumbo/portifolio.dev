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

  return (
    <aside className='toc-container'>
      <nav>
        <h2>Table of Contents</h2>
        <ul>
          {headings.map((heading, index) => (
            <li
              key={index}
              style={{ paddingLeft: `calc(${heading.depth}px * 8px)` }}>
              <Link href={`#${transformChild(heading.text)}`}>
                <span>{String(heading.text)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
