'use client';
import styled from 'styled-components';

export const _projects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
  padding-top: 20px;

  .headings {
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: underline;
    text-underline-offset: 4px;
    margin-bottom: 8px;
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 910px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 605px) {
      grid-template-columns: 1fr;
    }

    .card {
      width: 280px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border-radius: 12px;
      padding: 8px;
      user-select: none;
      border: 1px solid rgba(${({ theme }) => theme.font}, 0.15);
      box-shadow: 0px 10px 35px rgba(${({ theme }) => theme.black}, 0.1);

      .top {
        position: relative;
        width: 100%;
        height: 210px;

        h4 {
          position: absolute;
          bottom: 16px;
          left: 8px;
          padding: 0px 8px;
          font-size: 0.8rem;
          font-weight: 500;
         
          width: fit-content;
         
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
      }
    }
  }
`;
