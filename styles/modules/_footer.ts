'use client';

import styled from 'styled-components';

export const _footer = styled.footer`
  width: 100vw;
  height: min-content;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;

  .donuts-image-container {
    width: 100%;
    max-width: 600px;
    height: auto;
    padding: 20px;
    padding-bottom: 12px;
    margin: 0 auto;

    img {
      width: 100%;
      height: fit-content;
    }
  }

  h3 {
    text-align: center;
    line-height: 2rem;
    font-size: 0.98rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;

    li {
      display: grid;
      place-content: center;
      place-items: center;
      background: rgba(${({ theme }) => theme.primary}, 0.2);
      border-radius: 50%;
      padding: 10px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      :hover {
        color: rgb(${({ theme }) => theme.primary_shade});

        svg {
          color: rgb(${({ theme }) => theme.primary_shade});
        }
      }
    }
    svg {
      width: 20px;
      height: 20px;
      color: rgb(${({ theme }) => theme.primary_shade});
    }
  }
`;
