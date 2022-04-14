import React from "react";
import { Container, Inner, Outer, Title } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Title>Uploading...</Title>
      <Outer>
        <Inner />
      </Outer>
    </Container>
  );
};

export default Loading;
