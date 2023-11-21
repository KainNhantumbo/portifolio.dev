import styled from 'styled-components';
import { StyledCornerButton } from '../_defaults';

export const _blog = styled.main`
  width: 100%;
  max-width: 980px;
  padding: 0 12px;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  line-height: 1.6rem;
  margin-bottom: 50px;
  background: rgba(${({ theme }) => theme.background}, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    right: 50%;
    top: 20px;
    border-radius: 50%;
    z-index: -999;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 180px 140px rgba(${({ theme }) => theme.primary}, 0.8);
  }

  ::selection {
    background: rgba(${({ theme }) => theme.primary}, 0.5);
  }

  .presentation-container {
    width: 100%;
    padding: 0 12px;
    padding-bottom: 30px;
    border-bottom: 2px dashed rgb(${({ theme }) => theme.font});

    h1 {
      font-weight: 500;
      font-size: 2.8rem;
      line-height: 3.8rem;
      font-family: 'Zilla Slab';
      position: relative;
      i {
        color: rgb(${({ theme }) => theme.primary_shade});
      }

      a {
        ${StyledCornerButton}
        position: absolute;
        right: -20px;
        top: 0;
        border: none;

        &:hover {
          transition: all 200ms ease-in-out;
          color: rgb(${({ theme }) => theme.primary_shade});
        }
      }
    }

    h3 {
      font-size: 1.3rem;
      line-height: 1.8rem;
      font-weight: 500;
      margin-bottom: 8px;
    }

    p {
      line-height: 1.6rem;
    }
  }

  article {
    width: 100%;

    .posts-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        all: unset;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
        cursor: pointer;

        .header-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 5px;
          align-items: center;

          h3 {
            all: unset;
            font-size: 0.95rem;
            font-weight: 500;
            border-radius: 30px;
            color: rgb(${({ theme }) => theme.white});
            padding: 0 12px;
            background: rgb(${({ theme }) => theme.black});
            border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
          }

          h4 {
            font-weight: 500;
            font-size: 0.95rem;
          }
        }

        .title {
          font-family: 'Zilla Slab';
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 2rem;
          text-decoration: underline;
          text-underline-offset: 4px;
          position: relative;
          padding-left: 20px;

          &:hover {
            color: #1a8eff;
            transition: all 200ms ease-in-out;
          }

          &::before {
            content: '';
            z-index: 100;
            position: absolute;
            top: calc(50% - 2px);
            left: 0px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgb(${({ theme }) => theme.primary_shade});
          }
        }
      }
    }
  }
`;
