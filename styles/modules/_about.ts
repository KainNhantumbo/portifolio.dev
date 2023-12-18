'use client';
import styled from 'styled-components';

export const _about = styled.section`

  .experiences {
    text-align: center;

    .header-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      max-width: 450px;
      margin: 20px auto;

      div {
        text-align: left;
        h3 {
          font-weight: 600;
          font-size: 2rem;
          line-height: 2.8rem;
        }
      }

      img {
        border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
        border-radius: 50%;
      }

      @media screen and (max-width: 420px) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        margin-bottom: 5px;
      }
    }

    .op {
      margin-bottom: 10px;
      font-weight: 500;
    }
  }

  .cards-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    gap: 50px;
    margin-top: 20px;

    .card {
      display: grid;
      place-content: center;
      place-items: center;
      gap: 10px;
      width: 180px;
      height: 180px;
      background: rgb(${({ theme }) => theme.background});
      border-radius: 10px;
      padding: 10px;
      border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
      user-select: none;
      H4 {
        font-weight: 500;
      }
      span {
        font-size: 0.9rem;
        text-transform: capitalize;
        text-align: center;
      }
      :hover {
        svg {
          color: rgb(${({ theme }) => theme.primary_shade});
        }
      }
    }
    svg {
      width: 40px;
      height: 40px;
      color: rgb(${({ theme }) => theme.primary});
    }
  }
`;
