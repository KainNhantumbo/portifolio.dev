'use client';
import styled from 'styled-components';

export const _fluentButtons = styled.section`
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

  

  span {
    padding: 0;
  }
`;
