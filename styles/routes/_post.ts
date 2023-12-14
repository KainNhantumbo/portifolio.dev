'use client';
import styled from 'styled-components';

export const _post = styled.main`
  width: 100%;
  padding: 0 8px;
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
          width: auto;
          height: auto;
          max-width: 50px;

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
      }

      .read-time {
        display: flex;
        flex-flow: row wrap;
        gap: 0 5px;
        align-items: center;
        font-size: 0.9rem;

        i {
          font-weight: 500;
        }

        svg {
          width: 8px;
          height: 8px;
          color: rgb(${({ theme }) => theme.primary_shade});
        }
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

      .topic {
        all: unset;
        width: fit-content;
        font-size: 0.95rem;
        font-weight: 500;
        border-radius: 30px;
        color: rgb(${({ theme }) => theme.white});
        padding: 0 12px;
        background: rgb(${({ theme }) => theme.black});
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
        font-family: 'Space Grotesk';
      }

      h4 {
        line-height: 1.6rem;
        font-weight: 500;
        margin: 12px auto;
        font-family: 'Space Grotesk';
        font-size: 1.05rem;
        max-width: 1000px;
      }
    }

    .toc-container {
      width: 100%;
      padding: 12px;
      background: rgb(${({ theme }) => theme.background_shade});
      border-radius: 10px;
      line-height: 1.6rem;
      margin: 0 auto;
      margin: 20px auto;

      h2 {
        font-weight: 500;
      }

      ul {
        list-style: inside;
        a {
          text-decoration: underline;
          text-underline-offset: 3px;

          &:hover {
            color: #1a8eff;
          }
        }
      }
    }

    .content {
      max-width: 1000px;
      margin: 0 auto;

      pre {
        border-radius: 8px !important;
        border: 1px solid rgba(${({ theme }) => theme.accent}, 0.1);
        white-space: pre-wrap;
        word-break: break-all;
        word-wrap: break-word;
        text-align: justify;
      }

      pre code {
        word-spacing: normal;
        tab-size: 2 !important;
        hyphens: none;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4rem;
        white-space: inherit;
        border: none;
        padding: 0;
        overflow: auto;
        font-size: 0.95rem;
        margin: 2rem 0;
      }

      table {
        margin: 12px 0;
      }

      i {
        font-style: italic;
      }

      u {
        text-underline-offset: 3px;
      }

      s {
        text-decoration: line-through;
      }

      hr,
      .hr-class {
        color: rgb(${({ theme }) => theme.font});
        border-bottom: 2px solid rgb(${({ theme }) => theme.font});
        margin: 8px 0;
        border-radius: 3px;
      }

      em,
      .italic-class {
        font-style: italic;
      }

      a,
      .link-class {
        color: #1a8eff;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      p {
        margin-bottom: 25px;
        font-size: 1.1rem;
        line-height: 1.8rem;
      }

      h3,
      h2 {
        margin-bottom: 10px;
        font-size: 1.4rem;
      }

      h2 {
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
      }

      h4 {
        font-size: 1.3rem;
        line-height: 2.2rem;
      }

      h5,
      h6 {
        font-size: 1.1rem;
        line-height: 2rem;
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
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
      }

      code {
        padding: 2px 5px;
        background: rgba(${({ theme }) => theme.font}, 0.1);
        border-radius: 5px;
        margin: 0 5px;
        line-height: 1.6rem;
        font-family: 'IBM Plex Mono', Hack, Menlo, Consolas, 'SF Mono',
          monospace !important;

        ::selection {
          background: rgba(${({ theme }) => theme.secondary}, 0.5);
        }
      }

      blockquote {
        width: 100%;
        background: rgb(${({ theme }) => theme.background_shade});
        font-size: 1.2rem;
        padding: 12px 12px 1px 12px;
        margin: 12px 0;
        margin-left: 20px;
        line-height: 2rem;
        position: relative;
        border-radius: 8px;

        ::before {
          content: '';
          position: absolute;
          top: calc(50% - 8px);
          left: -12px;
          border-radius: 8px;
          width: 5px;
          height: 24px;
          background: rgb(${({ theme }) => theme.primary_shade});
        }

        @media screen and (max-width: 530px) {
          padding: 12px;
          font-size: 1.1rem;
          line-height: 1.8rem;
        }
      }
    }
  }
`;