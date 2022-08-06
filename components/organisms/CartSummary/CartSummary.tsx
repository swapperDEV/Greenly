import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import styles from "./cartsummary.module.scss";
import { ProductType } from "../../../types/store";
import { PromoCode } from "../../molecules/PromoCode/PromoCode";
import { useDispatch } from "react-redux";
import { checkoutProducts } from "../../../store/cart";

export const CartSummary = ({ products }: { products: Array<ProductType> }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(5);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const checkout = () => {
    dispatch(
      checkoutProducts({
        products: products,
        total: total,
        subtotal: subtotal,
        delivery: delivery,
        discount: discount,
      })
    );
    Router.push("/checkout");
  };
  useEffect(() => {
    let total = 0;
    products.map((product) => {
      let quantity = 1;
      if (product.quantity) {
        quantity = product.quantity;
      }
      if (product.sale) {
        const productTotal = product.sale * quantity;
        total += productTotal;
      } else {
        const productTotal = parseInt(product.price) * quantity;
        total += productTotal;
      }
    });
    setSubtotal(parseFloat(total.toFixed(2)));
  }, [products]);
  useEffect(() => {
    const total = (subtotal + delivery) * (1 - discount / 100);
    setTotal(parseFloat(total.toFixed(2)));
  }, [subtotal, discount, delivery]);
  return (
    <>
      {products.length > 0 && (
        <div className={styles.wrapper}>
          <p className={styles.summaryHead}>Summary</p>
          <p className={styles.promocodeInfo}>
            Have a coupon <Link href="/newsletter">code</Link>? enter here 🎉
          </p>
          <div className={styles.promocodeWrapper}>
            <PromoCode setDiscount={setDiscount} />
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryColumn}>
              <div>Subtotal:</div>
              <div>${subtotal}.00</div>
            </div>
            <div className={styles.summaryColumn}>
              <div>Delivery Fee:</div>
              <div>${delivery}.00</div>
            </div>
            <div className={styles.summaryColumn}>
              <div>Discount:</div>
              <div>{discount}%</div>
            </div>
          </div>
          <div className={styles.total}>
            <div>Total: </div>
            <div>${total}</div>
          </div>
          <div className={styles.checkout}>
            <GreenButton text={"Checkout"} onClick={() => checkout()} />
          </div>
        </div>
      )}
    </>
  );
};
