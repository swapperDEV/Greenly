import { ProductType } from "../../types/store";

export const priceSort = (a: ProductType, b: ProductType) => {
  const priceA = parseInt(a.price);
  const priceB = parseInt(b.price);
  if (priceA < priceB) {
    return -1;
  }
  if (priceA > priceB) {
    return 1;
  }
  return 0;
};
