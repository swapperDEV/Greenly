import Link from "next/link";
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
      <p className={products.length > 0 ? styles.bag : styles.bagOff}>
        Your Bag 🛒
      </p>
      {products.length > 0 ? (
        <div className={styles.products}>
          {products.map((product) => {
            return (
              <CartProduct edit={true} key={product.name} product={product} />
            );
          })}
        </div>
      ) : (
        <>
          <p>There are no items in your bag.</p>
          <div className={styles.addItems}>
            <Link href="/shop">Add items</Link>
          </div>
        </>
      )}
    </div>
  );
};
