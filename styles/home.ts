import styled from 'styled-components';

export const HomeContainer = styled.main`
  width: 100%;
  padding: 0 12px;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  line-height: 1.6rem;
  margin-bottom: 50px;

  h2 {
    line-height: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 auto;
    position: relative;
    svg {
      position: absolute;
      width: 20px;
      height: 20px;
      top: calc(50% - 10px);
      left: 0;
      color: rgb(${({ theme }) => theme.alter});
    }
    span {
      padding-left: 25px;
    }
  }

  .sub-title {
    color: rgb(${({ theme }) => theme.alterAlt});
    margin-bottom: 20px;
    position: relative;
    span {
      padding-left: 25px;
    }
    svg {
      position: absolute;
      width: 20px;
      height: 20px;
      top: calc(50% - 10px);
      left: 0;
    }
  }
`;
