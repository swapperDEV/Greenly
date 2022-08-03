import React, { useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import styles from "./promocode.module.scss";
export const PromoCode = ({ setDiscount }: { setDiscount: Function }) => {
  const [promoValidate, changePromoValidate] = useState("");
  const [promoStatus, changePromoStatus] = useState("?");
  const [promo, changePromo] = useState(0);
  const db = getFirestore();
  const checkPromoCode = async (promocode: string) => {
    let promo = promocode;
    if (promo.length > 0) {
      const docRef = doc(db, "promocodes", promocode);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        changePromoStatus("👍");
        changePromo(data.promo);
      } else {
        changePromoStatus("?");
        changePromo(0);
      }
    }
  };
  const handlePromoCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const promocode = e.target.value;
    changePromoValidate(promocode);
    checkPromoCode(promocode.toUpperCase());
  };
  const codeActivate = () => {
    if (promoStatus === "?") {
      changePromoStatus("x");
    } else if (promoStatus === "👍") {
      setDiscount(promo);
      changePromo(0);
      changePromoStatus("?");
      changePromoValidate("");
    }
  };
  const handlePushCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      codeActivate();
    }
  };
  return (
    <>
      <div className={styles.promocode}>
        <input
          value={promoValidate}
          onChange={handlePromoCode}
          maxLength={18}
          onKeyDown={handlePushCode}
        />
        <div onClick={codeActivate} className={styles.promoStatus}>
          {promoStatus}
        </div>
      </div>
      {promoStatus === "👍" && (
        <p className={styles.info}>
          <a onClick={codeActivate}>click</a> to activate code
        </p>
      )}
    </>
  );
};
