import { css } from 'styled-components';

export const BaseButtonOutline = css`
  border: none;
  background: none;
  border-radius: 10px;
  position: relative;
  padding: 8px;
  color: rgb(${({ theme }) => theme.font});
  width: fit-content;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  :hover {
    color: rgb(${({ theme }) => theme.primary});
  }
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    left: 7px;
    pointer-events: none;
  }
  span {
    padding-left: 20px;
    font-weight: 500;
    pointer-events: none;
  }
`;

export const BaseButton = css`
  border: none;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
  background: rgb(${({ theme }) => theme.primary});
  color: rgb(${({ theme }) => theme.text});
  border: 1px solid transparent;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  :hover {
    box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
    background: rgb(${({ theme }) => theme.secondary});
  }
  :disabled {
    box-shadow: none;
    background: rgba(${({ theme }) => theme.primary}, 0.4);
    span,
    svg {
      color: rgb(${({ theme }) => theme.backgroundAlt});
    }
  }

  svg {
    color: inherit;
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    left: 7px;
    pointer-events: none;
  }

  span {
    padding-left: 20px;
    font-weight: 500;
    pointer-events: none;
  }
`;



export const StyledLabels = css`
  font-weight: 500;
  position: relative;
  line-height: 1.4rem;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 2px;
    left: 0;
    color: rgb(${({ theme }) => theme.font});
  }
  span {
    padding-left: 25px;
    font-weight: 500;
  }
`;

export const StyledInputs = css`
  input,
  textarea,
  select {
    width: 100%;
    height: fit-content;
    border: none;
    padding: 10px 18px;
    line-height: 1.2rem;
    font-weight: 400;
    outline: none;
    border-radius: 10px;
    background: rgba(${({ theme }) => theme.background}, 0.7);
    border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.05);
    color: rgb(${({ theme }) => theme.font});
    :focus {
      border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.15);
      box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.06);
    }
    ::placeholder {
      color: rgba(${({ theme }) => theme.font}, 0.8);
      font-size: 0.9rem;
    }
    :disabled {
      background: rgb(${({ theme }) => theme.backgroundAlt});
      border: none;
      ::placeholder {
        color: transparent;
      }
    }
  }

  textarea {
    resize: vertical;
  }
`;
