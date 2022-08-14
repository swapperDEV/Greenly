import React, { useContext, useEffect, useState } from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import { FirebaseContext } from "../../../store/firebase-context";
import { CheckoutLogin } from "../../organisms/CheckoutSteps/CheckoutLogin";
import { CheckoutDelivery } from "../../organisms/CheckoutSteps/CheckoutDelivery";
export const CheckoutView = () => {
  const FirebaseCtx = useContext(FirebaseContext);
  const { user } = FirebaseCtx;
  const [step, changeStep] = useState("login");
  useEffect(() => {
    if (user) {
      if (user.uid) {
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
