import React, {FC} from "react";

import styles from './Cart.module.css'

import { useAppSelector, useAppDispatch } from "../../store/appHooks";
import { ClearCart } from "../../store/productsSlice";

interface CartProps {
    
}
 
const Cart: FC<CartProps> = () => {

    const dispatch = useAppDispatch();

    const cart = useAppSelector(state=> state.products.Cart)

    return ( 

        <div className={styles.cart}>
            {(cart.length > 0) ? 
            <div className={styles.cart_filled}> 
                <div className={styles.title}>
                    <h1>My Cart</h1>
                </div>
                <div className={styles.items}>
                    {cart.map((item) =>(
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.info}>
                                <p>{item.title}</p>
                            </div>
                            <div className={styles.count}>
                                <span>{item.price} $</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.order}>
                    <button>Order</button> 
                    <button onClick={() => {dispatch(ClearCart())}}>Clear all Cart</button>
                </div>
            </div> 
            // Если пустая корзина
            :  <div className={styles.cart_empty}>
                <p>Cart is Empty</p>
                </div>}
    
        </div>
    );
}
 
export default Cart;