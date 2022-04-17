import styled, { keyframes } from "styled-components";

const rotateCircle = keyframes`
  0% {
      transform: rotate(-45deg);
  }
  5% {
      transform: rotate(-45deg);
  }
  12% {
      transform: rotate(-405deg);
  }
  100% {
      transform: rotate(-405deg);
  }
`;

const iconLineTip = keyframes`
  0% {
      width: 0;
      left: -4px;
      top: 9px;
  }
  54% {
      width: 0;
      left: -4px;
      top: 9px;
  }
  70% {
      width: 29px;
      left: -8px;
      top: 14px;
  }
  84% {
      width: 10px;
      left: 8px;
      top: 21px;
  }
  100% {
      width: 15px;
      left: 3px;
      top: 18px;
  }
`;

const iconLineLon = keyframes`
  0% {
      width: 0;
      right: 21px;
      top: 23px;
  }
  65% {
      width: 0;
      right: 21px;
      top: 23px;
  }
  84% {
      width: 31px;
      right: -4px;
      top: 12px;
  }
  100% {
      width: 25px;
      right: 0px;
      top: 16px;
  }
`;

const Container = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4caf50;
  margin: auto;

  &::before {
    top: -1px;
    left: -10px;
    width: 20px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }

  &::after {
    top: -5px;
    left: 14px;
    width: 32px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: ${rotateCircle} 4.25s ease-in;
  }

  &::before,
  &::after {
    content: "";
    height: 50px;
    position: absolute;
    transform: rotate(-45deg);
  }

  .icon-line {
    height: 5px;
    background-color: var(--white);
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 11;

    &.line-tip {
      top: 18px;
      left: 3px;
      width: 15px;
      transform: rotate(45deg);
      animation: ${iconLineTip} 0.75s;
    }

    &.line-long {
      top: 16px;
      right: 0px;
      width: 25px;
      transform: rotate(-45deg);
      animation: ${iconLineLon} 0.75s;
    }
  }

  .icon-circle {
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(76, 175, 80, 0.5);
    background-color: #4caf50;
  }

  .icon-fix {
    top: 1px;
    width: 5px;
    left: 9px;
    z-index: 1;
    height: 41px;
    position: absolute;
    transform: rotate(-45deg);
  }
`;

export { Container };
