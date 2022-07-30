import { ProductType } from "./store";

export type SortedArray = Array<{ name: string; products: Array<ProductType> }>;

export interface IShopProductsProps {
  category: string;
  products: Array<ProductType>;
  salesProducts: Array<ProductType>;
  sortedProducts?: SortedArray;
  priceCategory: string;
  size: string;
  priceRange: Array<number>;
  updateMaxNumber: Function;
  sorting: string;
}
