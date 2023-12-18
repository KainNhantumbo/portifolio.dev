'use client';

import styled from 'styled-components';

export const _introduction = styled.section`
  width: 100%;
  max-width: 780px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  z-index: 200;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: rgb(${({ theme }) => theme.font});
  background: rgba(${({ theme }) => theme.background}, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
  position: relative;
`;
