import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;

  .main-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 65px;
    padding: 20px;
    border-radius: 0 0 12px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: rgba(${({ theme }) => theme.backgroundAlt}, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.6);
    z-index: 5000;

    @media screen and (max-width: 820px) {
      justify-content: flex-end;
    }
    @media screen and (max-width: 640px) {
      flex-direction: column;
      padding: 10px;
    }
  }

  button {
    border: none;
    background: none;
    border-radius: 3px;
    color: rgb(${({ theme }) => theme.secondary});
    width: fit-content;
    cursor: pointer;
    justify-self: flex-end;
    align-self: flex-end;
    display: none;
    padding: 5px;

    @media screen and (max-width: 640px) {
      display: block;
    }

    svg {
      width: 25px;
      height: 25px;
      pointer-events: none;
    }
  }

  .brand {
    position: absolute;
    top: 22px;
    left: 10px;
    color: rgb(${({ theme }) => theme.primary});
    cursor: pointer;

    span {
      font-weight: 500;
      text-align: center;
      font-size: 1.2rem;
      padding-left: 50px;
    }
    .image {
      position: absolute;
      width: 38px;
      height: 38px;
      color: rgb(${({ theme }) => theme.alter});
      left: 5px;
      top: -8px;
    }
  }

  nav {

    @media screen and (max-width: 640px) {
      width: 100%;
    }
    ul {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      font-weight: 500;
      padding: 0 10px;
      gap: 8px;

      @media screen and (max-width: 640px) {
        flex-direction: column;
        padding: 0 50px;
        display: none;
      }
      @media screen and (min-width: 640px) {
        display: flex;
      }

      li {
        position: relative;
        padding: 5px;

        @media screen and (max-width: 640px) {
          padding: 10px;
        }

        :hover {
          color: rgb(${({ theme }) => theme.primary});
          cursor: pointer;
        }
      }

      .active {
        @media screen and (max-width: 640px) {
          border: 1px solid rgba(${({ theme }) => theme.font}, 0.1);
          border-radius: 5px;
        }
        ::after {
          content: '';
          width: 20px;
          height: 5px;
          background: rgb(${({ theme }) => theme.secondary});
          position: absolute;
          bottom: -8px;
          left: calc(50% - 10px);
          border-radius: 5px;
          @media screen and (max-width: 640px) {
            width: 5px;
            height: 20px;
            bottom: calc(50% - 10px);
            left: -3px;
          }
        }
        :hover {
          ::after {
            background: rgb(${({ theme }) => theme.primary});
          }
        }
      }
    }
  }
`;
