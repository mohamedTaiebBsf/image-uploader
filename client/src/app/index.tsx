import React from "react";
import GlobalStyle from "./styles";
import Loading from "../components/loading";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Loading />
      </div>
    </React.Fragment>
  );
}

export default App;
