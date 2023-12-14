'use client';
import styled from 'styled-components';
import { BaseButton } from './_defaults';

export const _errorPage = styled.article`
  margin-top: 70px;
  display: grid;
  align-items: center;
  justify-items: center;
  line-height: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content-container {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 12px;
    font-family: 'Zilla Slab';

    h1 {
      font-weight: 600;
      font-size: 4.2rem;
      line-height: 5.8rem;
      color: rgb(${({ theme }) => theme.error});
    }

    button {
      ${BaseButton}
      margin-top: 20px;
      font-weight: 500;
    }
  }

  .logo-container {
    span {
      font-size: 2.6rem;
      line-height: 3.2rem;
      font-weight: 600;
      color: rgb(${({ theme }) => theme.font});
      font-family: 'Zilla Slab';
    }
  }
`;
