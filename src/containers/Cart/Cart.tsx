import React, { FC } from "react";

import styles from "./Cart.module.scss";

import { useAppSelector, useAppDispatch } from "../../store/appHooks";
import { ClearCart, PlusCount, MinusCount } from "../../store/productsSlice";

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.products.Cart);
  const totalPrice = useAppSelector((state) => state.products.TotalPrice);

  return (
    <div className={styles.cart}>
      {cart.length > 0 ? (
        <div className={styles.cart_filled}>
          <div className={styles.title}>
            <h1>My Cart</h1>
          </div>
          <div className={styles.items}>
            {cart.map((item) => (
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.info}>
                  <p>{item.title}</p>
                </div>
                <div className={styles.count}>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(MinusCount(item));
                      }}
                    >
                      -
                    </button>
                    <input disabled value={item.count}></input>
                    <button
                      onClick={() => {
                        dispatch(PlusCount(item));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <span>{item.price} $</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.order}>
            <div className={styles.totalPrice}>
              <span>Total Price :</span>
              <input disabled value={totalPrice.toFixed(2)}></input>
              <span> $</span>
            </div>
            
            <button>Order</button>
            <button
              onClick={() => {
                dispatch(ClearCart());
              }}
            >
              Clear all Cart
            </button>
          </div>
        </div>
      ) : (
        // Если пустая корзина
        <div className={styles.cart_empty}>
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
