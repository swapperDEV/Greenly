import React, { useState } from "react";
import styles from "./orderstatus.module.scss";

import OrderTimeline from "../../atoms/OrderTimeline/OrderTimeline";
import { CheckOrderByNumber } from "../../atoms/CheckOrderByNumber/CheckOrderByNumber";
export const OrderStatus = () => {
  return (
    <div className={styles.wrapper}>
      <OrderTimeline />
      <CheckOrderByNumber />
    </div>
  );
};
