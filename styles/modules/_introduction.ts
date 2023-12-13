import styled, { keyframes } from 'styled-components';



export const _introduction = styled.section`
  width: 100%;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  z-index: 200;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: rgb(${({ theme }) => theme.font});
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
    top: 0;
    border-radius: 50%;
    z-index: -999;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 180px 140px rgba(${({ theme }) => theme.primary}, 0.8);
  }

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
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 500;
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
      }
      span {
        padding-left: 20px;
      }
    }

    .anchors-container {
      width: 100%;
      display: flex;
      gap: 12px;

      a {
        display: grid;
        place-content: center center;
        place-items: center center;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        padding: 5px;
        border: 1px dashed rgb(${({ theme }) => theme.primary});
        cursor: pointer;
        color: rgb(${({ theme }) => theme.primary_shade});

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
        line-height: 4rem;

        background: linear-gradient(
          45deg,
          rgba(${({ theme }) => theme.secondary_shade}, 0.8) 20%,
          rgba(${({ theme }) => theme.primary_shade}, 0.8) 40%,
          rgba(${({ theme }) => theme.secondary}, 0.8) 300%
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        @media screen and (max-width: 640px) {
          font-size: 2.6rem;
          line-height: 2.8rem;
        }
      }
    }
  }

  p {
    font-size: 1.1rem;
    @media screen and (max-width: 640px) {
      font-size: 0.98rem;
      line-height: 1.6rem;
    }
  }
`;
