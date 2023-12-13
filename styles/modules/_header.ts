import styled from 'styled-components';

export const _header = styled.header`
  width: 100%;

  .main-container {
    width: 100%;
    width: fit-content;
    position: fixed;
    top: 12px;
    min-width: 550px;
    left: calc(50% - 285px);
    min-height: 50px;
    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 5000;

    border-radius: 12px;
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
    background: rgba(${({ theme }) => theme.background}, 0.5);
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.black}, 0.1);
    backdrop-filter: blur(5px);

    @media screen and (max-width: 640px) {
      flex-direction: column;
      min-width: 340px;
      left: calc(50% - 170px);

      .donut-container {
        position: absolute;
        top: 13px;
        right: calc(50% - 60px);
      }
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

    @media screen and (max-width: 640px) {
      display: block;
      position: absolute;
      top: 11px;
      right: 8px;
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
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    img {
      width: 100%;
      max-width: 19px;
      max-height: 19px;
      object-fit: cover;
    }

    span {
      font-weight: 600;
      font-size: 0.9rem;
      color: rgba(${({ theme }) => theme.primary_shade}, 0.8);
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
        padding: 20px;
        display: none;
        margin-top: 28px;
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
          bottom: -5px;
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
