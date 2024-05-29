import React from "react";
import { Typography } from "@material-ui/core";
import appleCinnamonMuffin from "../../public/assets/products/muffins/apple_cinnamon.jpg";

function ProductComponent(props) {
  return (
    <div className="product-container">
      <div className="grid">
        <div className="grid-col">
          <div className="img-cont">
            <img
              src={props?.imageUrl}
              alt={props?.description}
              className="product-img"
            />
          </div>
        </div>
        <div className="grid-col">
          <Typography variant="h4" component="p" className="product-name">
            {props?.name}
          </Typography>
          <div className="text-cont">
            <Typography variant="body1" component="p" className="grid-p">
              {props?.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
