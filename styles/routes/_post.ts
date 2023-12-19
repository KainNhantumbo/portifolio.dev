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

      .read-time {
        display: flex;
        flex-flow: row wrap;
        gap: 0 5px;
        align-items: center;
        font-size: 0.9rem;

        i {
          font-weight: 500;
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

      h4 {
        line-height: 1.6rem;
        font-weight: 500;
        margin: 12px auto;
        font-family: 'Space Grotesk';
        font-size: 1.05rem;
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
        border: 1px solid #00000015;
      }
    }
  }
`;
