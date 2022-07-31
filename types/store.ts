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
    basketWiggle: boolean;
  };
  firebase: {
    app: {};
    db: {};
  };
}
