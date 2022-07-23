import React from "react";
import { Product } from "../../atoms/Product/Product";
export const ShopProducts = () => {
  const products = ["asfdasd", "asdasdasd", "asdasd"];
  return (
    <div>
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};
