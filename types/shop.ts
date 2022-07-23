import { ProductType } from "./store";

export type SortedArray = Array<{ name: string; products: Array<ProductType> }>;

export interface IShopProductsProps {
  category: string;
  products: Array<ProductType>;
  sortedProducts: SortedArray;
}
