import styled from 'styled-components';

export const _post = styled.main`
  width: 100%;
  padding: 0 12px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.6rem;
  margin-bottom: 50px;

  ::selection {
    background: rgba(${({ theme }) => theme.primary}, 0.5);
  }
`;
