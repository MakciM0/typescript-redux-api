import { FC, useEffect, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/appHooks";
import { AddInCart, SetCurrentCategory } from "../../store/productsSlice";
import axios from "axios";
import { TProducts } from "../../types/types";
import { base_URL } from "../../api/Url";

import styles from "./SingleItem.module.scss";

interface SingleItemProps {}

const SingleItem: FC<SingleItemProps> = () => {
  const match = useMatch("/Shop/Item/:id/:name");
  const idMatch = match?.params.id;
  const cart = useAppSelector((state) => state.products.Cart);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ErrorItem: TProducts = {
    // ERROR TProduct | undefind
    title: "error",
    id: -1,
    price: 12,
    category: "men's clothing",
    description: "error",
    image: "error",
    rating: { rate: 0, count: 0 },
  };

  const [product, setProduct] = useState<TProducts>(ErrorItem); // Error => TProduct | undefind

  const dispatch = useAppDispatch();

  const HandleCart = (item: TProducts) => {
    dispatch(AddInCart(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${base_URL}/${idMatch}`).then((response) => {
          setProduct(response.data);
          setIsLoading(true);
        });
      } catch (err) {
        // ERROR
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.item_wrap}>
      {isLoading ? (
        <div className={styles.item}>
          <div className={styles.title}>
            <p>{product.title}</p>
          </div>
          <div className={styles.img}>
            <img src={product.image} alt={product.title}></img>
          </div>
          <div className={styles.info}>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.price}>
              Price: <span>{product.price} $</span>
            </p>
            <NavLink
              to={"/Shop"}
              onClick={() => {
                dispatch(SetCurrentCategory(product.category));
              }}
            >
              Category: {product.category}
            </NavLink>
            <p>
              Number of votes: <span>{product.rating.count}</span>
            </p>
            <p>
              Raiting: <span>{product.rating.rate}</span>
            </p>
          </div>
          <div className={styles.order}>
            <button
              onClick={() => {
                HandleCart(product);
              }}
            >
              {cart.some((item) => item.id === product.id)
                ? "Remove From Cart"
                : "Add in Cart"}
            </button>
          </div>
        </div>
      ) : (
        <span className={styles.loading}></span>
      )}
    </div>
  );
};

export default SingleItem;
