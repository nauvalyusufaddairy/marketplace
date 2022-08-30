import React from "react";
import styled from "styled-components";
import Navbar from "../../components/newNavbar/Navbar";
import Product from "../../components/product/Product";
import Products from "../../components/product/Products";

const Home = () => {
  const Box = styled.div`
    width: 200px;
    height: 100px;
    padding: 5px;
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      white-space: pre-wrap;
      word-break: break-all;
    }
  `;
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
