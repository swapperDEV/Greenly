import React, { useState } from "react";
import { ProductType } from "../../../types/store";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Circles } from "react-loader-spinner";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import styles from "./product.module.scss";
import { updateCart } from "../../../store/cart";
import { useDispatch } from "react-redux";

const Product = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const storage = getStorage();
  const [imgSrc, setImgSrc] = useState<string>("");
  const [added, productAdded] = useState(false);
  getDownloadURL(ref(storage, `${product.name}.PNG`)).then((url) => {
    setImgSrc(url);
  });
  const addProductToCart = () => {
    dispatch(updateCart({ ...product, quantity: 0 }));
    productAdded(true);
    setTimeout(() => {
      productAdded(false);
    }, 2000);
  };
  return (
    <div className={styles.product}>
      {imgSrc ? (
        <>
          <div className={styles.productImg}>
            <img height="180" src={imgSrc} alt={product.name} />
          </div>
          <div className={styles.info}>
            <div>
              <p className={styles.name}> {product.name}</p>
              {product.sale ? (
                <div className={styles.prices}>
                  <p className={styles.oldPrice}>$ {product.price}.00</p>
                  <p className={styles.price}>$ {product.sale}.00</p>
                </div>
              ) : (
                <p className={styles.price}>$ {product.price}.00</p>
              )}
            </div>
            <div className={styles.addIcon}>
              {added ? (
                <FaCheck />
              ) : (
                <FaShoppingBasket
                  className={styles.basket}
                  onClick={() => addProductToCart()}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <Circles height="180" width="180" color="grey" ariaLabel="loading" />
      )}
    </div>
  );
};

export const ProductPagination = ({
  products,
}: {
  products: Array<ProductType>;
}) => {
  return (
    <>
      <div className={styles.productsList}>
        {products &&
          products.map((item: ProductType) => {
            return <Product key={item.name} product={item} />;
          })}
      </div>
    </>
  );
};
