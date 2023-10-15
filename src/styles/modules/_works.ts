import styled from 'styled-components';

export const _works = styled.section`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  .item-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 12px;
    padding: 12px;
    user-select: none;
    border-radius: 12px;
    background: rgb(${({ theme }) => theme.foreground});
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);

    @media screen and (max-width: 890px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      img {
        max-width: 100%;
      }

      .content-container {
        .title {
          text-align: center;
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      max-width: 500px;
      border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
    }

    .content-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .title {
        font-size: 1.4rem;
        line-height: 2rem;
      }

      .description-container {
        p {
          text-align: left;
        }
      }

      .platforms-container,
      .stack-container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 8px;

        h4 {
          font-weight: 500;
          text-transform: uppercase;
          color: rgb(${({ theme }) => theme.primary_shade});
        }

        span {
          text-transform: capitalize;
          padding: 2px 5px;
          border-radius: 8px;
          border: 1px dashed rgb(${({ theme }) => theme.primary});
        }
      }

      .anchors-container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 12px;
        margin-top: 12px;
        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          color: #1a8eff;

          svg {
            color: rgb(${({ theme }) => theme.primary_shade});
          }

          :hover {
            text-decoration-line: underline;
            text-underline-offset: 3px;
          }
        }
      }
    }
  }
`;
