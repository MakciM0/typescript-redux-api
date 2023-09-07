import React, { FC, useState } from "react";
import { TProducts } from "../../types/types";
import ItemShop from "../ItemShop/ItemShop";
import {
  ChangeCurrentPage,
  NextPage,
  PrevPage,
} from "../../store/productsSlice";
import { useAppDispatch } from "../../store/appHooks";
import { useAppSelector } from "../../store/appHooks";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  products: TProducts[];
}

const Pagination: FC<PaginationProps> = (products: PaginationProps) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const currentPage = useAppSelector((state) => state.products.CurrentPage);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.products.length / recordsPerPage);
  const numbers = Array.from(Array(nPage), (_, index) => index + 1);

  const dispatch = useAppDispatch();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(PrevPage());
    }
  };
  const handleNextPage = () => {
    if (currentPage < nPage) {
      dispatch(NextPage());
    }
  };
  const handleChangeCurrentPage = (id: number) => {
    dispatch(ChangeCurrentPage(id));
  };

  return (
    <>
      <div className={styles.pagination_items}>
        <ItemShop products={records}></ItemShop>
      </div>
      <nav className={styles.pagination_nav}>
        <button
          onClick={() => {
            handlePrevPage();
          }}
        >
          Prev
        </button>
        {numbers.map((n) => (
          <p
            className={`number ${currentPage === n ? "nav_active" : ""}`}
            onClick={() => {
              handleChangeCurrentPage(n);
            }}
          >
            {n}
          </p>
        ))}
        <button
          onClick={() => {
            handleNextPage();
          }}
        >
          Next
        </button>
      </nav>
    </>
  );
};

export default Pagination;
