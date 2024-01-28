'use client';
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
`;
