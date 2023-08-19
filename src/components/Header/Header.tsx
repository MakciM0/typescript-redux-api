import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/appHooks";
import { SetCurrentCategory } from "../../store/productsSlice";

import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.products.Cart);

  return (
    <header>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <h1>
            <NavLink
              to={"/Shop"}
              onClick={() => {
                dispatch(SetCurrentCategory(""));
              }}
            >
              Logo
            </NavLink>
          </h1>
        </div>
        <div className={styles.links}>
          {/* <NavLink to={'/Main'}>
            Main
          </NavLink> */}
          <NavLink
            to={"/Shop"}
            onClick={() => {
              dispatch(SetCurrentCategory(""));
            }}
          >
            Shop
          </NavLink>
          <NavLink to={"/Cart"}>
            Cart
            <span>{cart.length > 0 ? cart.length : " "}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
