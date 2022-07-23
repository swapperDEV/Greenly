export type ProductType = {
  type: string;
  name: string;
  price: string;
};
export interface IStore {
  products: {
    productsList: Array<ProductType>;
  };
  firebase: {
    app: {};
    db: {};
  };
}
