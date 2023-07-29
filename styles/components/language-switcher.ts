import styled from 'styled-components';
import { BaseButton, BaseButtonOutline } from '../defaults';

export const _languageSwitcher = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(${({ theme }) => theme.background}, 0.2);
  backdrop-filter: blur(5px);
  z-index: 10000;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  user-select: none;

  .buttons-container {
    display: flex;
    flex-flow: row wrap;
    gap: 12px;
    margin-top: 20px;

    button {
      ${BaseButton}
      
    }
  }

  .dialog-prompt {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(${({ theme }) => theme.backgroundAlt});
    box-shadow: 0 0 20px rgb(${({ theme }) => theme.shadows});
    max-width: 600px;
    margin: 0 10px;

    .prompt-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
      span {
        font-weight: 500;
        color: rgb(${({ theme }) => theme.primary});
      }
      p {
        line-height: 1.6rem;
        font-size: 0.9rem;
      }
    }

    .prompt-actions {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 10px;

      .prompt-cancel {
        ${BaseButtonOutline}
      }
    }
  }
`;