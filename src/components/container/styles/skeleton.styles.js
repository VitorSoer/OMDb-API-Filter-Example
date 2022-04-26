import styled from "styled-components";

export const SkeletonStyle = styled.div`
  border-radius: 15px;
  height: 35rem;
  width: 25rem;
  margin: 2rem;
  opacity: 0.7;

  animation: skell-loading 1s linear infinite alternate;

  @keyframes skell-loading {
    0% {
      background-color: hsl(200, 0%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 35rem;
  }
`;
