import React from "react";
import { ProductType } from "../../../types/store";
import { CartProduct } from "../../molecules/CartProduct/CartProduct";
import styles from "./cartproducts.module.scss";
export const CartProducts = ({
  products,
}: {
  products: Array<ProductType>;
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.bag}>Your Bag 🛒</p>
      {products.length > 0 ? (
        <div>
          {products.map((product) => {
            return <CartProduct key={product.name} product={product} />;
          })}
        </div>
      ) : (
        <p>There are no items in your bag.</p>
      )}
    </div>
  );
};
