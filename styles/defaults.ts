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
  color: rgb(${({ theme }) => theme.text});
  border: 1px solid transparent;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  background: rgb(${({ theme }) => theme.secondary});
  :hover {
    box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
    background: rgb(${({ theme }) => theme.primary});
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

