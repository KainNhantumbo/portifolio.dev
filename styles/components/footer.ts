import styled from 'styled-components';

export const _footer = styled.footer`
  width: 100vw;
  height: min-content;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
	border-radius: 12px;
  background: rgba(${({ theme }) => theme.backgroundAlt}, 0.5);

  h3 {
    padding-top: 20px;
    text-align: center;
    line-height: 2rem;
		font-size: .98rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;

    li {
      display: grid;
      place-content: center;
      place-items: center;
      background: rgb(${({ theme }) => theme.background_alter});
      border-radius: 10px;
      padding: 10px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      :hover {
        color: rgb(${({ theme }) => theme.secondary});

        svg {
          color: rgb(${({ theme }) => theme.alter});
        }
      }
    }
    svg {
      width: 20px;
      height: 20px;
      color: rgb(${({ theme }) => theme.secondary});
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    line-height: 1.4rem;
    font-weight: 500;
    font-size: 0.9rem;

    p {
      display: flex;
      flex-direction: row;
      gap: 3px;
    }

    svg {
      color: #f35887;
      width: 20px;
      height: 20px;
    }
  }
`;
