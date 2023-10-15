import styled from 'styled-components';

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
      line-height: 1.6rem;
    }
  }
`;
