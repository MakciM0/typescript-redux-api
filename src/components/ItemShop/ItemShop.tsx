import React, { FC } from "react";
import { TProducts } from "../../types/types";
import { NavLink } from "react-router-dom";

// import Pagination from "../Pagination/Pagination";

import { SetCurrentCategory } from "../../store/productsSlice";
import { useAppDispatch } from "../../store/appHooks";

import styles from "./ItemShop.module.scss";

interface ItemShopProps {
  products: TProducts[];
}

const ItemShop: FC<ItemShopProps> = (products: ItemShopProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(increment())
  };

  return (
    <>
      {products.products.map((item) => (
        <div key={item.id} className={styles.item}>
          <p className={styles.title}>{item.title}</p>
          <img src={item.image} alt="" />
          <span>Price: {item.price} $</span>
          <p
            onClick={() => {
              dispatch(SetCurrentCategory(item.category));
            }}
            className={styles.category}
          >
            {item.category}
          </p>
          <NavLink
            to={`Item/${item.id}/${item.title}`}
            onClick={() => handleClick()}
          >
            See More
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default ItemShop;
