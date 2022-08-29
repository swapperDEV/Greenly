import React from "react";
import { OrderStatus } from "../../organisms/OrderStatus/OrderStatus";
import { MotionProvider } from "../../providers/MotionProvider";
export const OrdersView = () => {
  return (
    <MotionProvider>
      <OrderStatus />
    </MotionProvider>
  );
};
