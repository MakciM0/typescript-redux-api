import React, {FC} from "react";

import { TProducts } from "../../containers/Shop/Shop";

import { NavLink } from "react-router-dom";

import styles from './ItemShop.module.css' 
import { SetCurrentCategory } from "../../store/productsSlice";
import { useAppDispatch } from "../../store/appHooks";

interface ItemShopProps {
    products: TProducts[]
}



 
const ItemShop: FC<ItemShopProps> = (products: ItemShopProps) => {
    const dispatch = useAppDispatch()

    const handleClick= () => {
        // dispatch(increment())
    } 

    // console.log(products)
    return ( 
    <>
        {products.products.map((item) =>(
            <div key={item.id} className={styles.item}>
                <p className={styles.title}>{item.title}</p>
                <img src={item.image} alt="" /> 
                <span>Price: {item.price} $</span>
                <p 
                    onClick={() => {dispatch(SetCurrentCategory(item.category))}} 
                    className={styles.category}
                    >{item.category}
                </p> 
                <NavLink to={`Item/${item.id}/${item.title}`} onClick={() => handleClick()} >See More</NavLink>
            </div>
        ))}
    </> 
    );
}
 
export default ItemShop;