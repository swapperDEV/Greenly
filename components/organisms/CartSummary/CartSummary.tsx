import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import styles from "./cartsummary.module.scss";
import { ProductType } from "../../../types/store";
export const CartSummary = ({ products }: { products: Array<ProductType> }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(5);
  const [total, setTotal] = useState(0);
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
    setSubtotal(total);
  }, [products]);
  useEffect(() => {
    setTotal((subtotal + delivery) * (1 - discount));
  }, [subtotal, discount, delivery]);
  return (
    <div className={styles.wrapper}>
      <p className={styles.summaryHead}>Summary</p>
      <p className={styles.promocodeInfo}>
        Have a coupon <Link href="/newsletter">code</Link>? enter here 🎉
      </p>
      <div className={styles.promocodeWrapper}>
        <div className={styles.promocode}>
          <input maxLength={18} />
          <div>?</div>
        </div>
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
        <GreenButton text={"Checkout"} />
      </div>
    </div>
  );
};
