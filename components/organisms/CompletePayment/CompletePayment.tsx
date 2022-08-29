import React, { useContext, useEffect, useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getOrderNumber } from "../../../core/helpers/getOrderNumber";
import styles from "./completepayment.module.scss";
import { FirebaseContext } from "../../../store/firebase-context";
import { IStore, ProductType } from "../../../types/store";
import { PaymentLoading } from "../../molecules/PaymentLoading/PaymentLoading";
import Router from "next/router";
import {
  removeCartProducts,
  removeCheckoutProducts,
} from "../../../store/cart";
import img from "../../../assets/headPlant.png";
import { FaCopy } from "@react-icons/all-files/fa/FaCopy";
import { useEffectOnce } from "usehooks-ts";
import Image from "next/image";

type OrderType = {
  products: Array<ProductType>;
  price?: number;
  number?: string;
  user?: string | number;
};

export const CompletePayment = () => {
  const { checkout } = useSelector((state: IStore) => state.cart);
  const dispatch = useDispatch();
  const firebaseCtx = useContext(FirebaseContext);
  const db = getFirestore();
  const [loaded, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState(getOrderNumber());
  const [order, setOrder] = useState<OrderType | null>(null);
  const pushOrder = async (orderInfo: OrderType) => {
    setOrder(orderInfo);
    if (orderInfo.number) {
      dispatch(removeCartProducts());
      dispatch(removeCheckoutProducts());
      await setDoc(doc(db, "orders", orderNumber), orderInfo);
    }
  };
  const createOrder = () => {
    if (checkout.products) {
      if (checkout.products.length > 0) {
        const orderInfo = {
          products: checkout.products,
          price: checkout.total,
          number: orderNumber,
          user: firebaseCtx.currentUser ? firebaseCtx.currentUser.uid : "guest",
          status: "confirmed",
        };
        pushOrder(orderInfo);
      }
    }
  };
  useEffectOnce(() => {
    //payment bridge for tests.
    setTimeout(() => {
      setLoading(true);
      createOrder();
    }, 500);
  });
  return (
    <>
      {loaded ? (
        <div className={styles.orderWrapper}>
          <Image src={img} height="420px" />
          <div className={styles.orderNumber}>
            <p>
              Order created -{" "}
              <a className={styles.number}>{order !== null && order.number}</a>
            </p>
            <FaCopy
              onClick={() => navigator.clipboard.writeText(orderNumber)}
            />
          </div>
        </div>
      ) : (
        <PaymentLoading />
      )}
    </>
  );
};
