import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --white: #FFFFFF;
  --gelid-white: #ccc;
  --black: #121212D5;
  --dark-black: #080808;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
    font-size: 62.5%;

    @media only screen and (max-width: 1024px) {
      font-size: 50%;
    }
    @media only screen and (max-width: 425px) {
      font-size: 43.75%;
    }
}

body{
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: 2rem;
    padding: 4rem;

    @media only screen and (max-width: 768px) {
      padding: 0;
      margin-top: 2rem;
    }
}
`;
