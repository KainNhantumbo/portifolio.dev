import styled from 'styled-components';

export const _header = styled.header`
  width: 100%;

  .main-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 65px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 5000;
    background: rgba(${({ theme }) => theme.background}, 0.5);
    backdrop-filter: blur(8px);

    @media screen and (max-width: 820px) {
      justify-content: flex-end;
    }
    @media screen and (max-width: 640px) {
      flex-direction: column;
      padding: 10px;
    }
  }

  button {
    all: unset;
    border-radius: 3px;
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
      color: rgb(${({ theme }) => theme.font});
    }

    :hover {
      svg {
        color: rgb(${({ theme }) => theme.primary_shade});
      }
    }
  }

  .donut-container {
    position: absolute;
    top: 16px;
    left: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    img {
      width: 100%;
      max-width: 25px;
      max-height: 25px;
      object-fit: cover;
    }

    span {
      font-weight: 500;
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
        padding: 0 30px;
        display: none;
      }
      @media screen and (min-width: 640px) {
        display: flex;
      }

      li {
        position: relative;
        padding: 5px;

        a {
          width: 100%;
        }

        @media screen and (max-width: 640px) {
          padding: 10px;
        }

        :hover {
          color: rgb(${({ theme }) => theme.primary_shade});
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
