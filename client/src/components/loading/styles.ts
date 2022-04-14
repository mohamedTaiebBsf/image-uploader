import styled, { keyframes } from "styled-components";

const loadAnimation = keyframes`
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
`;

const Container = styled.div`
  max-width: 400px;
  padding: 36px 32px 42px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 18px;
  letter-spacing: 0.56px;
  margin-bottom: 30px;
`;

const Outer = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--bg);
  border-radius: 8px;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--blue);
  border-radius: 8px;
  animation: ${loadAnimation} 1s linear infinite;
`;

export { Container, Title, Outer, Inner };
