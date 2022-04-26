import styled from "styled-components";

export const PaginateWrapper = styled.div`
  display: grid;
  place-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  width: 90%;
  border-radius: 10px;
  background: #181818;
  color: var(--white);
  height: 8rem;
  margin: 0 auto 2rem;
  font-weight: 600;

  cursor: pointer;

  @media only screen and (max-width: 425px) {
    width: 100%;
    border-radius: 0;
  }

  .paginationBtn {
    display: flex;
    place-items: center;
    column-gap: 2.5rem;
    list-style: none;
  }

  .nextBtn,
  .previousBtn {
    background: #222222;
    color: var(--white);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 0.3s;

    :hover {
      background: var(--black);
    }
  }

  .activeBtn {
    color: lightskyblue;
  }
`;
