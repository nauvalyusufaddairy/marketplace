import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
const CartDropdown = () => {
  const Anima = keyframes`
  0%{
    height: 0px;
  }
  100%{
    height: auto;
  }
  `;
  const Container = styled.div`
    position: fixed;
    top: 88px;
    background-color: rgb(255, 255, 255);
    border-radius: 0px 0px 10px 10px;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 8px 0px;
    transform: translate3d(0px, 0px, 0px);
    width: 400px;
    z-index: 901;
    overflow: hidden;
    padding: 0px;
    animation-name: ${Anima};
    animation-duration: 0.4s;
    height: auto;
  `;

  return <Container>CartDropdown asfdasflaksdfliasofhoishfoho</Container>;
};

export default CartDropdown;
