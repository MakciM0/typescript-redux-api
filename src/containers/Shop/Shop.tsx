import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import ItemShop from "../../components/ItemShop/ItemShop";
import { useAppDispatch } from "../../store/appHooks";
import { useAppSelector } from "../../store/appHooks";
import { AddProducts, SetCurrentCategory } from "../../store/productsSlice";
import SideMenu from "../../components/SideMenu/SideMenu";
import { TProducts } from "../../types/types";
import { base_URL } from "../../api/Url";
import styles from "./Shop.module.scss";

interface ShopProps {}

const Shop: FC<ShopProps> = () => {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state) => state.products.CurrentCategory
  );

  const [products, setProducts] = useState<TProducts[]>([]); // axios.get
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const category_URL = `/category/${currentCategory}`; // for useEffect axios else

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currentCategory) {
          await axios.get(base_URL).then((response) => {
            setProducts(response.data);
            setIsLoading(true);
            //Dispatch
            dispatch(AddProducts(response.data)); //SingleItem > AddCart
          });
        } else {
          await axios.get(base_URL + category_URL).then((response) => {
            setProducts(response.data);
          });
        }
      } catch (err) {
        // ERROR
      }
    };
    // setIsLoading(false);
    fetchData();
  }, [category_URL]);

  //   Пагинация
  return (
    <div className={styles.shop}>
      <h1
        onClick={() => {
          dispatch(SetCurrentCategory(""));
        }}
      >
        Shop
      </h1>
      <div className={styles.items}>
        {isLoading ? (
          <ItemShop products={products}></ItemShop>
        ) : (
          <span className={styles.loading}></span>
        )}
      </div>
      <SideMenu products={products}></SideMenu>
    </div>
  );
};

export default Shop;
