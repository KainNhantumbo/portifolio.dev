import styled from 'styled-components';

export const _blog = styled.main`
  width: 100%;
  max-width: 980px;
  padding: 0 12px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  line-height: 1.6rem;
  margin-bottom: 50px;
  background: rgb(${({ theme }) => theme.background});

  ::selection {
    background: rgba(${({ theme }) => theme.primary}, 0.5);
  }

  .presentation-container {
    width: 100%;
    padding: 0 12px;
    padding-bottom: 30px;
    border-bottom: 2px dashed rgb(${({ theme }) => theme.font});

    h1 {
      font-weight: 500;
      font-size: 2.8rem;
      line-height: 3.8rem;
      font-family: 'Zilla Slab';

      i {
        color: rgb(${({ theme }) => theme.primary_shade});
      }
    }

    h3 {
      font-size: 1.3rem;
      line-height: 1.8rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    p {
      line-height: 1.6rem;
    }
  }

  article {
    width: 100%;

    .posts-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        all: unset;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
        cursor: pointer;

        .header-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 5px;
          align-items: center;

          h3 {
            all: unset;
            font-size: 0.95rem;
            font-weight: 500;
            border-radius: 30px;
            color: rgb(${({ theme }) => theme.white});
            padding: 0 12px;
            background: rgb(${({ theme }) => theme.black});
          }

          h4 {
            font-weight: 500;
            font-size: 0.95rem;
          }
        }

        .title {
          font-family: 'Zilla Slab';
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 2rem;
          text-decoration: underline;
          text-underline-offset: 4px;
          position: relative;
          padding-left: 20px;

          &::before {
            content: '';
            z-index: 100;
            position: absolute;
            top: calc(50% - 2px);
            left: 0px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgb(${({ theme }) => theme.primary_shade});
          }
        }
      }
    }
  }
`;
