import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Product = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Box = styled.div`
    background-color: #fff;
    box-shadow: 1px 1px 10px #666;
    padding: 2em;
    width: 200px;
  `;
  const P = styled.p`
    color: #212121;
    font-size: 0.86rem;
    line-height: 1.5;
    max-width: 100%;
    max-height: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: break-spaces;
    max-height: 35px;
  `;
  return (
    <Container>
      <Box>
        <P>dknsdkhksduhfushduhsdfhusoihosehoeioiehi</P>
      </Box>
    </Container>
  );
};

export default Product;
