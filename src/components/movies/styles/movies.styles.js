import styled from "styled-components";

export const MoviesContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  height: 35rem;
  width: 25rem;
  margin: 2rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  > div {
    display: grid;
    place-items: center;
    text-align: center;
    position: absolute;
    left: 0;
    top: 22rem;

    padding: 2rem;
    background: #121212d2;

    width: 100%;
    height: 12rem;
    color: var(--white);
    font-size: 1.75rem;
  }

  > img {
    background-position: cover;
    background-position: center;
    height: 35rem;
    width: 25rem;

    filter: brightness(75%);
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;
