import styled from 'styled-components';

export const _abilities = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
  padding-top: 20px;
  line-height: 1.6rem;

  .stack-container {
    margin-top: 20px;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
    :hover {
      transition: all 200ms ease;
      border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
      box-shadow: 0 0 20px rgba(${({ theme }) => theme.font}, 0.1);
    }
  }

  .list-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 495px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 330px) {
      grid-template-columns: 1fr;
      place-items: center;
    }

    .item {
      position: relative;
      display: flex;
      width: 150px;
      flex-direction: column;
      gap: 5px;
      padding: 15px;
      padding-right: 20px;
      border-radius: 10px;
      border: 2px solid transparent;
      user-select: none;
      :hover {
        border: 2px solid rgb(${({ theme }) => theme.primary});

        svg {
          color: rgb(${({ theme }) => theme.primary});
        }
      }

      span {
        font-size: 0.9rem;
        color: rgba(${({ theme }) => theme.font}, 0.8);
      }
      svg {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 8px;
        right: 8px;
        border-radius: 5px;
        color: rgb(${({ theme }) => theme.primary_shade});
      }
    }
  }
`;
