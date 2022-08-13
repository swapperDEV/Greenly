import { Auth, User } from "firebase/auth";

export type ProductType = {
  type: string;
  name: string;
  price: string;
  size?: string;
  sale?: number;
  quantity?: number;
};
export interface IStore {
  products: {
    productsList: Array<ProductType>;
    sales: Array<ProductType>;
  };
  cart: {
    cart: Array<ProductType>;
    checkout: CheckoutType;
    basketWiggle: boolean;
  };
  firebase: {
    app: {} | any;
    auth: Auth;
    user: User;
  };
}

export interface ICartState {
  cart: Array<ProductType>;
  checkout: CheckoutType;
  basketWiggle: boolean;
}

export type CheckoutType = {
  products?: Array<ProductType>;
  total?: number;
  subtotal?: number;
  delivery?: number;
  discount?: number;
};
