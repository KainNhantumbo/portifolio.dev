import styled from 'styled-components';

export const ContactContainer = styled.section`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
  padding-top: 20px;
  line-height: 1.6rem;
  @media screen and (max-width: 370px) {
    margin: 0;
  }

  label {
    font-weight: 500;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;

    .option {
      display: flex;
      gap: 10px;
      flex-direction: row;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .message {
    color: rgb(${({ theme }) => theme.primary});
    font-size: 0.9rem;
    font-weight: 500;
  }

  .form-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
    background: rgb(${({ theme }) => theme.backgroundAlt});

    @media screen and (max-width: 420px) {
      padding: 20px 12px;
    }

    h1 {
      svg {
        position: absolute;
        width: 30px;
        height: 30px;
        left: 200px;
        top: -1px;
      }
    }

    .form-control {
      display: flex;
      gap: 10px;
      label {
        padding-bottom: 10px;
      }

      @media screen and (max-width: 568px) {
        flex-flow: row wrap;
      }

      .form-item {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }

    form {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 10px;

      span {
        font-size: 0.9rem;
        font-weight: 500;
      }

      @media screen and (max-width: 420px) {
      }

      button {
        border: none;
        background: none;
        border-radius: 8px;
        position: relative;
        padding: 7px 10px;
        color: rgb(${({ theme }) => theme.text});
        background: rgb(${({ theme }) => theme.secondary});
        width: fit-content;
        cursor: pointer;

        svg {
          width: 18px;
          height: 18px;
          position: absolute;
          top: 7px;
          right: 7px;
          pointer-events: none;
        }
        span {
          padding-right: 20px;
          font-weight: 500;
          pointer-events: none;
        }
      }

      input,
      textarea {
        border: none;
        border-radius: 12px;
        padding: 10px;
        resize: vertical;
        background: rgb(${({ theme }) => theme.inner});
        outline: none;

        ::placeholder {
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }
  }
`;
