import { transformChild } from '@/components/TableOfContents';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = { children: string };

export default function ContentRenderer({ children }: Props) {
  return (
    <ReactMarkdown
      className='blog-post-content'
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <div className='text-white my-3 font-monospace'>
              <SyntaxHighlighter
                {...rest}
                style={{ ...materialDark }}
                language={match[1]}
                wrapLongLines={true}
                ref={undefined}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code
              {...rest}
              className={clsx(
                className,
                'rounded-[5px] bg-font/10 py-[2px] px-[5px] mx-1 font-monospace'
              )}>
              {children}
            </code>
          );
        },
        h2(props) {
          const { children, ...rest } = props;
          return (
            <h2 {...rest} id={transformChild(String(children))}>
              {children}
            </h2>
          );
        },
        h3(props) {
          const { children, ...rest } = props;
          return (
            <h2 {...rest} id={transformChild(String(children))}>
              {children}
            </h2>
          );
        },
        h4(props) {
          const { children, ...rest } = props;
          return (
            <h4 {...rest} id={transformChild(String(children))}>
              {children}
            </h4>
          );
        },
        h5(props) {
          const { children, ...rest } = props;
          return (
            <h5 {...rest} id={transformChild(String(children))}>
              {children}
            </h5>
          );
        },
        h6(props) {
          const { children, ...rest } = props;
          return (
            <h6 {...rest} id={transformChild(String(children))}>
              {children}
            </h6>
          );
        }
      }}>
      {children}
    </ReactMarkdown>
  );
}
