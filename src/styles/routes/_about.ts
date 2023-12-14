import styled from 'styled-components';

export const _about = styled.main`
  width: 100%;
  max-width: 980px;
  padding: 0 8px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  line-height: 1.6rem;
  margin-bottom: 50px;
  background: rgba(${({ theme }) => theme.background}, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    right: 50%;
    top: 20px;
    border-radius: 50%;
    z-index: -999;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 180px 140px rgba(${({ theme }) => theme.primary}, 0.8);
  }

  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

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
