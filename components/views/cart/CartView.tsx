import React from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import { useSelector } from "react-redux";
import { IStore } from "../../../types/store";
export const CartView = () => {
  const { cart } = useSelector((state: IStore) => state.cart);
  return (
    <MotionProvider>
      <>
        <h1>Cart</h1>
        <ul>
          {cart.map((product) => {
            return <li key={product.name}>{product.name}</li>;
          })}
        </ul>
      </>
    </MotionProvider>
  );
};
