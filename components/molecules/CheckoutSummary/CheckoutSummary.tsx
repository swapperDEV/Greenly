import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore, ProductType } from "../../../types/store";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "./checkoutsummary.module.scss";
export const CheckoutSummary = () => {
  const { checkout } = useSelector((state: IStore) => state.cart);
  const prices = [
    { name: "delivery:", price: checkout.delivery },
    { name: "discount:", price: checkout.discount },
    { name: "subtotal:", price: checkout.subtotal },
    { name: "total:", price: checkout.total },
  ];
  useEffect(() => {
    if (!checkout.products) {
      Router.push("/cart");
    }
  }, []);
  return (
    <>
      <div className={styles.summary}>
        <div className={styles.head}>
          <p>In your bag</p> <a onClick={() => Router.push("/cart")}>Edit</a>
        </div>
        <div className={styles.cost}>
          {prices.map((price, index: number) => {
            return (
              <div key={index} className={styles.price}>
                <p>{price.name}</p>
                <a>$ {price.price}</a>
              </div>
            );
          })}
        </div>
        {checkout.products &&
          checkout.products.map((product: ProductType, index: number) => {
            return <CartProduct key={index} edit={false} product={product} />;
          })}
      </div>
    </>
  );
};
