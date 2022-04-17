import React from "react";
import { Container } from "./styles";

const CheckMark = () => {
  return (
    <Container>
      <span className="icon-line line-tip" />
      <span className="icon-line line-long" />
      <div className="icon-circle" />
      <div className="icon-fix" />
    </Container>
  );
};

export default CheckMark;
