import React from "react";
export const ShopProducts = () => {
  const products = ["asfdasd", "asdasdasd", "asdasd"];
  return (
    <div>
      {products.map((product) => {
        return <button>{product}</button>;
      })}
    </div>
  );
};
