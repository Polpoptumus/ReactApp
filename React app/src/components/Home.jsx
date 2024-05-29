import React from "react";
import { Typography } from "@material-ui/core";
import ProductComponent from "./ProductComponent";
import productData from "./Muffins";
import Contact from "./Contact";

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

function Home() {
  return (
    <div className="home-container home">
      <Typography variant="h2" component="h2" className="home-h1">
        Home
      </Typography>
      <Typography variant="h5" component="h5">
        Welcome to Highland Beans! We offer the best coffee beans of Scotland!
      </Typography>
      <Typography variant="h4" component="h4">
        Top Sellers
      </Typography>
      {/* display only 2 products */}
      {productData.slice(0, 2).map(createProduct)}

      <Contact />
    </div>
  );
}

export default Home;
