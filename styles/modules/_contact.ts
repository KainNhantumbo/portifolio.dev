'use client';
import styled from 'styled-components';
import { BaseButton, StyledInputs, StyledLabels } from '../_defaults';

export const _contact = styled.section`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
  padding-top: 20px;
  line-height: 1.6rem;

  @media screen and (max-width: 370px) {
    margin: 0;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;

    .option {
      display: flex;
      gap: 10px;
      flex-direction: row;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .message {
    color: rgb(${({ theme }) => theme.primary});
    font-size: 0.9rem;
    font-weight: 500;
  }

  .intro-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .form-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
    background: rgb(${({ theme }) => theme.foreground});

    @media screen and (max-width: 420px) {
      padding: 20px 12px;
    }

    h1 {
      svg {
        position: absolute;
        width: 30px;
        height: 30px;
        left: 200px;
        top: -1px;
      }
    }

    .form-control {
      display: flex;
      gap: 10px;
      label {
        padding-bottom: 10px;
      }

      @media screen and (max-width: 568px) {
        flex-flow: row wrap;
      }

      .form-item {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }

    form {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 10px;

      label {
        ${StyledLabels}
      }

      ${StyledInputs}

      button {
        ${BaseButton}
      }
    }
  }
`;
