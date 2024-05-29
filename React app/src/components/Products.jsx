import React from "react";
import { Typography } from "@material-ui/core";
import ProductComponent from "./ProductComponent";
import productData from "./Muffins";
import cupcakeData from "./Cupcakes";
import VeganData from "./Vegan";

function createProduct(product) {
  return (
    <ProductComponent
      key={product.id}
      name={product.name}
      description={product.description}
      imageUrl={product.imageUrl}
    />
  );
}

function Products() {
  return (
    <div className="Products-container">
      <Typography variant="h1" component="h1" className="products-h1">
        Products
      </Typography>
      <Typography variant="h5" component="h5">
        Our muffins!
      </Typography>

      {productData.map(createProduct)}
      <Typography variant="h5" component="h5">
        Come and enjoy our cupcakes!
      </Typography>
      {cupcakeData.map(createProduct)}
      <Typography variant="h5" component="h5" className="center-text">
        Tasty and fresh Vegan delicacy
      </Typography>
      {VeganData.map(createProduct)}
    </div>
  );
}

export default Products;