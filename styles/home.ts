import styled from 'styled-components';

export const _home = styled.main`
  width: 100%;
  padding: 0 12px;
  padding-top: 75px;
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

    @media screen and (max-width: 420px) {
      font-size: 1rem;
      text-align: center;
    }

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
