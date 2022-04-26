import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;

  > div > input {
    border-radius: 10px;
    border: 1px solid var(--gelid-white);
    padding: 2rem;
    width: 35rem;
    height: 3.5rem;

    @media only screen and (max-width: 425px) {
      width: 25rem;
    }
  }

  > div > button {
    background: var(--dark-black);
    color: var(--gelid-white);
    letter-spacing: 0.15rem;
    border: none;

    padding: 1.325rem 2rem;
    text-align: center;
    border-radius: 10px;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }

  > div > h2 {
    display: grid;
    place-items: center;
    font-size: 5.5rem;
    min-height: 60rem;
    width: 100%;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 60rem;
  width: 100%;
  margin-bottom: 2rem;
`;
