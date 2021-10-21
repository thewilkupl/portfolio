import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fcf;
    border-color: #fcf transparent #fcf transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

const Spinner = () => {
  return <Wrapper></Wrapper>;
};

export default Spinner;
