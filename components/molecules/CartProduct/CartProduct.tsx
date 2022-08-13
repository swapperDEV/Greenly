import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { ProductType } from "../../../types/store";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import styles from "./cartproduct.module.scss";
import {
  reduceQuantity,
  updateCart,
  removeFromCart,
} from "../../../store/cart";
import { useDispatch } from "react-redux";
export const CartProduct = ({
  product,
  edit,
}: {
  product: ProductType;
  edit: boolean;
}) => {
  const dispatch = useDispatch();
  const [imgSrc, setImgSrc] = useState<string>("");
  const [price, setPrice] = useState<number>(parseInt(product.price));
  const storage = getStorage();
  getDownloadURL(ref(storage, `${product.name}.PNG`)).then((url) => {
    setImgSrc(url);
  });
  useEffect(() => {
    if (product.sale) {
      setPrice(product.sale);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.productImg}>
        <img height="50" src={imgSrc} alt={product.name} />
      </div>
      <div>
        <p>{product.name}</p>
        <p className={styles.price}>
          Total : $ {product.quantity && price * product.quantity}.00
        </p>
      </div>
      {edit ? (
        <>
          <div className={styles.quantity}>
            <button
              className={styles.btnMinus}
              onClick={() => dispatch(reduceQuantity(product))}
            >
              -
            </button>
            <p className={styles.quantityCount}>{product.quantity}</p>
            <button
              className={styles.btnPlus}
              onClick={() => dispatch(updateCart(product))}
            >
              +
            </button>
          </div>
          <div
            onClick={() => dispatch(removeFromCart(product))}
            className={styles.trash}
          >
            <FaTrash />
          </div>
        </>
      ) : (
        <div className={styles.quantity}>
          <p className={styles.quantityCount}>{product.quantity} pieces</p>
        </div>
      )}
    </div>
  );
};
