'use client';
import { css } from 'styled-components';

export const BaseButtonOutline = css`
  border: none;
  background: none;
  padding: 7px 10px;
  color: rgb(${({ theme }) => theme.font});
  width: fit-content;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  :hover {
    color: rgb(${({ theme }) => theme.primary_shade});
  }
  span {
    font-weight: 500;
    pointer-events: none;
  }
`;

export const BaseButton = css`
  padding: 7px 10px;

  :disabled {
    box-shadow: none;
    background: rgba(${({ theme }) => theme.primary}, 0.4);
    span {
      color: rgb(${({ theme }) => theme.foreground});
    }
  }
  span {
    font-weight: 500;
    pointer-events: none;
  }
`;

export const StyledCornerButton = css`
  all: unset;
  border-radius: 10px;
  color: rgb(${({ theme }) => theme.font});
  border: 1px solid rgba(${({ theme }) => theme.black}, 0.07);
  width: fit-content;
  cursor: pointer;
  display: grid;
  place-content: center;
  padding: 5px;

  :hover {
    color: rgb(${({ theme }) => theme.primary_shade});
  }

  svg {
    pointer-events: none;
    width: 20px;
    height: 20px;
  }
`;

export const StyledLabels = css`
  position: relative;
  line-height: 1.4rem;

  svg {
    color: rgb(${({ theme }) => theme.font});
  }
  span {
    padding-left: 25px;
    font-weight: 500;
  }
`;

