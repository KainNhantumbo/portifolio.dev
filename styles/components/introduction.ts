import styled from 'styled-components';

export const IntroductionContainer = styled.section`
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
  color: rgb(${({ theme }) => theme.text});

  .intro-background {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    height: 600px;
  }

  .intro-details {
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    padding: 40px 20px;
    background-color: rgba(${({ theme }) => theme.shadows}, 0.2);
    backdrop-filter: blur(4px);
    border-radius: 0 0 20px 20px;

    .placeholder {
      width: fit-content;
      background: linear-gradient(
        130deg,
        rgb(${({ theme }) => theme.secondary}) 10%,
        rgb(${({ theme }) => theme.primary}) 130%,
        rgb(${({ theme }) => theme.alter}) 5%
      );
      color: rgb(${({ theme }) => theme.text});
      padding: 0 12px;
      text-transform: capitalize;
      border-radius: 15px;
      font-size: 0.9rem;
      position: relative;

      svg {
        position: absolute;
        width: 20px;
        height: 20px;
        top: calc(50% - 10px);
        left: 8px;
        color: rgb(${({ theme }) => theme.text});
      }
      span {
        padding-left: 20px;
      }
    }

    h1 {
      font-size: 2.8rem;
      line-height: 3.2rem;
      font-weight: 500;
      color: rgb(${({ theme }) => theme.font});
      text-shadow: 1px 1px 2px rgb(${({ theme }) => theme.hover});

      @media screen and (max-width: 640px) {
        font-size: 1.8rem;
      line-height: 2.2rem;
      }
    }
  }
`;
