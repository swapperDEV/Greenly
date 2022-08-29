import React, { useState } from "react";
import { GreenButton } from "../Buttons/GreenButton/GreenButton";
import { Input } from "../Input/Input";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import styles from "./checkorderbynumber.module.scss";
export const CheckOrderByNumber = () => {
  const [inputValue, setInputValue] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const db = getFirestore();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const checkOrderStatus = async () => {
    const docRef = doc(db, "orders", `${inputValue}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setOrderStatus(docSnap.data().status);
    } else {
      setOrderStatus("Cant find order with this number.");
    }
  };
  return (
    <div className={styles.wrapper}>
      <Input
        type="text"
        name="Order Number"
        value={inputValue}
        onChange={handleInput}
      />
      {orderStatus !== "" && (
        <p className={styles.status}>
          Your orders status is: <a>{orderStatus}</a>
        </p>
      )}
      <GreenButton
        text="Check order status"
        onClick={() => checkOrderStatus()}
      />
    </div>
  );
};
