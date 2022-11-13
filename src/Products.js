import React, { useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const productData = useSelector((data) => data.productReducer);
  return (
    <>
      <h1>Product List</h1>
      {JSON.stringify(productData)}
    </>
  );
};

export default Products;
