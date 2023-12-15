import styled from 'styled-components';

export const _about = styled.main`

 


  .description-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      line-height: 1.6rem;
    }
  }

  .complements-container {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .anchors-container {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      gap: 12px;
      margin: 0 auto;

      a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 3px 8px;
        gap: 5px;
        color: rgb(${({ theme }) => theme.primary_shade});
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.08);
        border-radius: 8px;
        &:hover {
          text-decoration-line: underline;
          text-underline-offset: 3px;
        }
      }
    }

    .techs-container {
      display: flex;
      flex-flow: column wrap;
      gap: 12px;

      div {
        display: flex;
        flex-flow: row wrap;
        gap: 12px;
        align-items: center;

        p {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding: 3px 8px;
          gap: 5px;

          border: 1px solid rgba(${({ theme }) => theme.font}, 0.08);
          border-radius: 8px;

          svg {
            color: rgb(${({ theme }) => theme.primary_shade});
          }
        }
      }
    }
  }
`;
