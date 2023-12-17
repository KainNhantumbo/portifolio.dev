import ReactMarkdown from 'react-markdown';
import { transformChild } from '@/components/TableOfContents';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = { children: string }

export default function ContentRenderer({ children }: Props) {
  return (
    <ReactMarkdown
      className='content'
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              {...rest}
              style={hopscotch}
              language={match[1]}
              wrapLongLines={true}
              ref={undefined}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
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

  )
}