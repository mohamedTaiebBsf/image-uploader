import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--white);
    background-color: var(--blue);
    padding: 8px 16px;
    border-radius: 8px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default GlobalStyle;
export { Container };
