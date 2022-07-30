export type ProductType = {
  type: string;
  name: string;
  price: string;
  size?: string;
  sale?: number;
};
export interface IStore {
  products: {
    productsList: Array<ProductType>;
    sales: Array<ProductType>;
  };
  firebase: {
    app: {};
    db: {};
  };
}
