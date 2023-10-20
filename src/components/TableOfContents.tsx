import { Token, marked } from 'marked';
import Link from 'next/link';

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
            <li key={index} data-depth={heading.depth}>
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
