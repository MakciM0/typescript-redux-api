import React, {FC, useState, useEffect, useCallback} from "react";
import axios from "axios";
import ItemShop from "../../components/ItemShop/ItemShop";
import { useAppDispatch } from "../../store/appHooks";
import { useAppSelector } from "../../store/appHooks";
import { AddProducts, SetCurrentCategory } from "../../store/productsSlice";
import SideMenu from "../../components/SideMenu/SideMenu";

import styles from './Shop.module.css'

interface ShopProps {
    
}

export type TProducts = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: "men's clothing" | "jewelery" | "electronics" | "women's clothing",
    image: string,
    rating: {
        rate: number,
        count: number
        }
    }

    type TCategory = {
        category:  ["men's clothing" | "jewelery" | "electronics" | "women's clothing"]
    }

 
const Shop: FC<ShopProps> = () => {

    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector(state=> state.products.CurrentCategory)

    const [products, setProducts] = useState<TProducts[]>([]);
    const [category, setCategory] = useState<string[]>();

    const base_URL = 'https://fakestoreapi.com/products';
    const category_URL = `/category/${currentCategory}`

    useEffect(() => {
        const fetchData = async () =>{
            try{
                if(!currentCategory){
                   await axios.get(base_URL).then((response) => {
                        setProducts(response.data);
                        // allCategory(response.data)
                        //Dispatch
                        dispatch((AddProducts(response.data))) //SingleItem > AddCart

                    }) 
                } else{
                    await axios.get(base_URL + category_URL).then((response) =>{
                        setProducts(response.data);
                    })
                }
                 
            } catch (err) {
                // ERROR
            } 
        };
         fetchData();
      },[category_URL]);

      console.log(products)

    //   useEffect(() => {
    //     const fetchDataCategory = async () =>{
    //         try{
    //              await axios.get(base_URL + category_URL).then((response) => {
    //                     setProducts(response.data);
    //                     // allCategory(response.data)
    //                     //Dispatch
    //                     // dispatch((AddProducts(response.data)))

    //                 })
    //         } catch (err) {
    //             // ERROR
    //         } 
    //     };
         
    //   },[]);

      
    
    // const allCategory = (products: TProducts[]) => {
    //     products.map((prod) =>{
    //         if(prod.category !== category[prod.id]){
    //             setCategory(prod.category)
    //         }
    //     })
    // }
   
    

    //   Пагинация
    return ( 
        <div className={styles.shop}>
            <h1 onClick={() => {dispatch(SetCurrentCategory(''))}}>Shop</h1>
            <div className={styles.items}>
                <ItemShop products={products}></ItemShop>
            </div>
            <SideMenu products={products}></SideMenu>
            
            
        </div>
        
    );
}
 
export default Shop;