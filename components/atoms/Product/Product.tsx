import React, { useState } from "react";
import { ProductType } from "../../../types/store";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Circles } from "react-loader-spinner";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";

import styles from "./product.module.scss";

export const Product = ({ product }: { product: ProductType }) => {
  const storage = getStorage();
  const [imgSrc, setImgSrc] = useState<string>("");
  getDownloadURL(ref(storage, `${product.name}.PNG`))
    .then((url) => {
      setImgSrc(url);
    })
    .catch((error) => console.log(error));

  return (
    <div className={styles.product}>
      {imgSrc ? (
        <>
          <img height="180" width="150" src={imgSrc} alt={product.name} />
          <div className={styles.info}>
            <div>
              <p className={styles.name}> {product.name}</p>
              <p className={styles.price}>$ {product.price}.00</p>
            </div>
            <div className={styles.addIcon}>
              <FaShoppingBasket />
            </div>
          </div>
        </>
      ) : (
        <Circles height="30" width="30" color="grey" ariaLabel="loading" />
      )}
    </div>
  );
};
