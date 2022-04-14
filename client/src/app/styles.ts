import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

:root {
  --white: #fff;
  --blue: #2F80ED;
  --bg: #F2F2F2;
  --text: #4F4F4F;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg);
    color: var(--text);
    font-weight: 500;
    line-height: 1.3;
}
`;

export default GlobalStyle;
