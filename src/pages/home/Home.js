import React from "react";
import Navbar from "../../components/newNavbar/Navbar";
import Products from "../../components/product/Products";
import Product from "../../test/Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "80vh",
          overflow: "scroll",
          width: "990px",
          marginTop: "130px",
          zIndex: "0",
        }}
      >
        <Products />
      </div>
    </div>
  );
};

export default Home;
