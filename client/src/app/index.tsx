import React from "react";
import Uploader from "../components/uploader";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Uploader />
      </Container>
    </React.Fragment>
  );
}

export default App;
