import React, { useState } from "react";
import { DeliveryForm } from "../../atoms/DeliveryForm/DeliveryForm";
import styles from "./checkoutdetails.module.scss";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaMoneyBill as FaMoney } from "@react-icons/all-files/fa/FaMoneyBill";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import { Paying } from "../../atoms/Paying/Paying";
export const CheckoutDetails = () => {
  const [step, changeStep] = useState("address");
  const [address, setAddress] = useState(null);
  const redirectToPayment = (values: any) => {
    console.log(values);
    if (address !== null) {
      changeStep("payment");
    }
  };
  return (
    <>
      <div className={styles.details}>
        <section
          className={step === "address" ? styles.shipping : styles.shippingOff}
        >
          <div className={styles.head} onClick={() => changeStep("address")}>
            <p>Delivery</p> <FaHome />
          </div>
          {step === "address" && (
            <>
              <DeliveryForm redirectToPayment={redirectToPayment} />
            </>
          )}
        </section>
        <section className={step === "payment" ? styles.paying : styles.payOff}>
          <div className={styles.head}>
            <p>Payment</p> <FaMoney />
          </div>
          {step === "payment" && (
            <>
              <Paying />
            </>
          )}
        </section>
      </div>
    </>
  );
};
