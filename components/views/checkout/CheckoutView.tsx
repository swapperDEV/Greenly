import React from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import styles from "./checkoutview.module.scss";
import { useSelector } from "react-redux";
import { IStore, ProductType } from "../../../types/store";
import products from "../../../store/products";
import { CartProduct } from "../../molecules/CartProduct/CartProduct";
export const CheckoutView = () => {
  const { checkout } = useSelector((state: IStore) => state.cart);
  console.log(checkout);

  return (
    <MotionProvider>
      <>
        <div className={styles.wrapper}>
          {checkout.products &&
            checkout.products.map((product: ProductType, index: number) => {
              return <CartProduct key={index} edit={false} product={product} />;
            })}
        </div>
      </>
    </MotionProvider>
  );
};
