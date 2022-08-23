import React, { useContext, useEffect, useState } from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import { FirebaseContext } from "../../../store/firebase-context";
import { CheckoutLogin } from "../../organisms/CheckoutSteps/CheckoutLogin";
import { CheckoutDelivery } from "../../organisms/CheckoutSteps/CheckoutDelivery";
export const CheckoutView = () => {
  const FirebaseCtx = useContext(FirebaseContext);
  const { currentUser } = FirebaseCtx;
  const [step, changeStep] = useState("login");
  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      if (currentUser.uid) {
        changeStep("delivery");
      }
    }
  }, []);
  return (
    <MotionProvider>
      <>
        {step === "login" && <CheckoutLogin changeStep={changeStep} />}
        {step === "delivery" && <CheckoutDelivery />}
      </>
    </MotionProvider>
  );
};
