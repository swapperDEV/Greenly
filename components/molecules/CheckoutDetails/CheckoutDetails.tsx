import React, { useEffect, useState } from "react";
import { DeliveryForm } from "../../atoms/DeliveryForm/DeliveryForm";
import styles from "./checkoutdetails.module.scss";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaMoneyBill as FaMoney } from "@react-icons/all-files/fa/FaMoneyBill";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import { Paying } from "../../atoms/Paying/Paying";
export const CheckoutDetails = ({
  completePayment,
}: {
  completePayment: Function;
}) => {
  const [step, changeStep] = useState("address");
  const [address, setAddress] = useState(null);
  const redirectToPayment = (values: any) => {
    setAddress(values);
  };
  const submitPayment = () => {
    changeStep("completed");
    completePayment();
  };
  useEffect(() => {
    if (address !== null) {
      changeStep("payment");
    }
  }, [address]);
  return (
    <>
      <div className={styles.details}>
        <section
          className={step === "address" ? styles.shipping : styles.shippingOff}
        >
          <div className={styles.head}>
            <p>Delivery</p> <FaHome />
          </div>
          {step === "address" && (
            <>
              <DeliveryForm
                redirectToPayment={redirectToPayment}
                address={address}
              />
            </>
          )}
        </section>
        <section className={step === "payment" ? styles.paying : styles.payOff}>
          <div className={styles.head}>
            <p>Payment</p> <FaMoney />
          </div>
          {step === "payment" && (
            <>
              <Paying submitPayment={submitPayment} />
            </>
          )}
        </section>
      </div>
    </>
  );
};
