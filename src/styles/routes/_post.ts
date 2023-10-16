import styled, { css } from 'styled-components';
import { BaseButton } from '../_defaults';

const ShareLinksStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;

  .title {
    font-weight: 600;
  }

  .options {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    a {
      width: 35px;
      height: 35px;
      display: grid;
      place-content: center center;
      padding: 5px;
      background: rgba(${({ theme }) => theme.primary_shade}, 0.1);
      border-radius: 8px;

      :hover {
        color: rgb(${({ theme }) => theme.primary_shade});
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const _post = styled.main`
  width: 100%;
  padding: 0 12px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.6rem;

  ::selection {
    background: rgba(${({ theme }) => theme.primary}, 0.5);
  }

  .main-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    justify-items: center;
    max-width: 980px;
    align-self: center;
    margin: 0 auto;
  }

  article {
    padding: 30px 40px 0 40px;

    @media screen and (max-width: 620px) {
      padding: 30px 20px;
    }

    .meta-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .author {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0;
        gap: 18px;

        img {
          width: 50px;
          border-radius: 50%;
        }

        div {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          font-size: 0.98rem;
          line-height: 1.4rem;
          .description {
            font-weight: 500;
          }
        }
      }

      .share-options {
        ${ShareLinksStyles}
      }

      h1 {
        line-height: 2.9rem;
        font-size: 2.4rem;
        font-family: 'Zilla Slab';

        strong {
          font-weight: 600;
        }
        @media screen and (max-width: 420px) {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }
      }

      .article-image {
        width: 100%;
        height: 100%;
        max-width: 900px;
        max-height: 480px;
        object-fit: cover;
        border-radius: 10px;
        margin: 0 auto;
      }

      .tags-container {
        display: flex;
        justify-content: flex-start;
        gap: 12px;
        align-items: center;
        margin-top: 10px;
        .title {
          font-weight: 600;
        }
        .tags {
          display: flex;
          justify-content: flex-start;
          gap: 8px;
          flex-flow: row wrap;
          max-width: 70%;

          span {
            padding: 10px;
            border-radius: 5px;
            background: rgba(${({ theme }) => theme.alternative_b}, 0.1);
          }
        }
      }

      h4 {
        padding: 10px;
        background: rgba(${({ theme }) => theme.primary}, 0.1);
        border-radius: 10px;
        line-height: 1.6rem;
        font-weight: 500;
        margin: 0 auto;
        margin: 20px auto;
        max-width: 1000px;
      }
    }

    .content {
      max-width: 1000px;
      margin: 0 auto;

      p {
        margin-bottom: 25px;
        font-size: 1.1rem;
        line-height: 1.8rem;
      }

      h3,
      h2 {
        margin-bottom: 10px;
        font-size: 1.3rem;
        font-weight: 500;
      }

      h2 {
        font-size: 1.6rem;
      }

      ul {
        margin-bottom: 1.8rem;
        li {
          font-size: 1.1rem;
          line-height: 1.8rem;
          list-style: disc;
          margin-left: 2rem;
        }
      }

      img {
        width: 100%;
        max-width: 900px;
        border-radius: 12px;
        margin: 0 auto;
        margin-top: 10px;
      }

      pre {
        background-color: rgb(${({ theme }) => theme.background_shade});
        border-radius: 12px;
        margin: 20px 0;
        padding: 12px;
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
        white-space: pre-wrap;
        word-break: break-all;
        word-wrap: break-word;
        text-align: justify;
      }

      pre code {
        background-color: unset;
        font-family: Hack, Menlo, Consolas, 'SF Mono', 'IBM Plex Mono',
          monospace;
        word-spacing: normal;
        tab-size: 2;
        hyphens: none;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4rem;
        white-space: inherit;
        border: none;
        padding: 0;
        overflow: auto;
        font-size: 0.95rem;
        margin: 2rem 0;
        white-space: pre;
      }

      code {
        white-space: pre;
        padding: 2px 5px;
        background: rgba(${({ theme }) => theme.font}, 0.1);
        border-radius: 5px;
        margin: 0 5px;
        line-height: 1.6rem;
        font-family: Hack, Menlo, Consolas, 'SF Mono', 'IBM Plex Mono',
          monospace;

        ::selection {
          background: rgba(${({ theme }) => theme.secondary}, 0.5);
        }
      }

      blockquote {
        width: 100%;
        background: rgba(${({ theme }) => theme.primary}, 0.1);
        border-left: 3px solid rgba(${({ theme }) => theme.font}, 0.1);
        text-align: left;
        font-size: 1.2rem;
        padding: 18px;
        margin: 12px 0;
        line-height: 2rem;

        @media screen and (max-width: 530px) {
          padding: 12px;
          font-size: 1.1rem;
          line-height: 1.8rem;
        }
      }
    }
  }

  .base-container {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .share-options {
      ${ShareLinksStyles}
      justify-content: center;
      flex-direction: column;
      .options {
        gap: 10px;
      }
    }

    .support-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      text-align: center;

      h2,
      p {
        line-height: 1.4rem;
      }

      h2 {
        font-weight: 600;
        font-size: 1.4rem;
      }
      p {
        font-size: 1.1rem;
        max-width: 620px;
      }

      .dots {
        width: 30px;
        height: 30px;
      }

      .coffee-mug-icon {
        width: 40px;
        height: 40px;
        color: rgb(${({ theme }) => theme.primary_shade});
      }

      a {
        ${BaseButton}
      }
    }
  }
`;
