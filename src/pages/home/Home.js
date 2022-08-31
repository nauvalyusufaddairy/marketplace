import React from "react";
import styled from "styled-components";
import Navbar from "../../components/newNavbar/Navbar";
import Product from "../../components/product/Product";
import Products from "../../components/product/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default Home;
