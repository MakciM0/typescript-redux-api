import React, {FC} from "react";

import styles from './Cart.module.css'

import { useAppSelector } from "../../store/appHooks";

interface CartProps {
    
}
 
const Cart: FC<CartProps> = () => {

    const PlusItem = () =>{

    }
    const MinusItem = () =>{
        
    }

    const cart = useAppSelector(state=> state.products.Cart)
    console.log(cart)
    return ( 
        <div className={styles.cart}>
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
            </div>
        </div>
    );
}
 
export default Cart;