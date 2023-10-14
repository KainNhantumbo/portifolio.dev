import styled from 'styled-components';

export const _introduction = styled.section`
  width: 100%;
  max-width: 1368px;
  margin: 0 auto;
  line-height: 1.8rem;
  font-size: 1.2rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  color: rgb(${({ theme }) => theme.font});

  .intro-background {
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 12px;
    height: 600px;
  }

  .intro-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 40px 20px;
    background-color: rgba(${({ theme }) => theme.primary}, 0.2);
    backdrop-filter: blur(8px);
    border-radius: 0 0 12px 12px;
    z-index: 200;

    .welcome-container {
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: flex-start;
      align-items: center;

      .placeholder {
        background: linear-gradient(
          130deg,
          rgb(${({ theme }) => theme.secondary}) 10%,
          rgb(${({ theme }) => theme.primary}) 130%,
          rgb(${({ theme }) => theme.primary_shade}) 5%
        );
        color: rgb(${({ theme }) => theme.white});
        padding: 0 12px;
        text-transform: capitalize;
        border-radius: 5px;
        font-size: 0.9rem;
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        white-space: nowrap;

        svg {
          position: absolute;
          width: 20px;
          height: 20px;
          top: calc(50% - 10px);
          left: 8px;
          color: rgb(${({ theme }) => theme.white});
        }
        span {
          padding-left: 20px;
        }
      }

      ul {
        width: 100%;
        display: flex;
        gap: 12px;

        li {
          border-radius: 8px;
          width: 32px;
          height: 32px;
          padding: 4px;
          border: 1px dashed rgb(${({ theme }) => theme.primary});
          cursor: pointer;

          :hover {
            color: rgb(${({ theme }) => theme.secondary});

            svg {
              transition: all 200ms ease-in-out;
              color: rgb(${({ theme }) => theme.white});
            }
          }
        }
        svg {
          position: relative;
          left: calc(50% - 11px);
          top: calc(50% - 12px);
          width: 24px;
          height: 24px;
          color: rgb(${({ theme }) => theme.white});
        }
      }
    }

    .styled-intro-container {
      width: fit-content;
      display: flex;
      flex-direction: column;
      position: relative;

      h3 {
        line-height: 1.2rem;
        padding: 0;
        font-weight: 500;
        font-size: 0.98rem;
      }

      .title-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 12px;

        h1 {
          width: 100%;
          font-size: 3.8rem;
          font-weight: 600;
          color: rgb(${({ theme }) => theme.white});
          line-height: 1rem;

          @media screen and (max-width: 640px) {
            font-size: 1.6rem;
          }
        }
      }
    }

    p {
      @media screen and (max-width: 640px) {
        font-size: 1rem;
        line-height: 1.4rem;
      }
    }
  }
`;
