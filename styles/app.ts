import styled from 'styled-components';

export const AppContainer = styled.div`
  .fluent-buttons {
    z-index: 3000;
    position: fixed;
    bottom: 20px;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: 10vh;
    left: 97vw;
    bottom: 135px;
    width: 0;
    height: 0;

    @media screen and (max-width: 690px) {
      left: 95vw;
    }
    @media screen and (max-width: 480px) {
      left: 90vw;
    }

    button {
      width: 32px;
      height: 32px;
      margin-top: 8px;
      border: none;
      display: grid;
      background: rgba(${({ theme }) => theme.primary}, 0.2);
      border-radius: 10px;
      backdrop-filter: blur(10px);
      place-content: center;
      position: relative;
      cursor: pointer;

      svg {
        width: 24px;
        height: 24px;
        color: rgb(${({ theme }) => theme.primary});

				:hover {
					transition: all 200ms ease-in-out;
					color: rgb(${({ theme }) => theme.secondary});
				}
      }
    }
    span {
      padding: 0;
    }
  }
`;
