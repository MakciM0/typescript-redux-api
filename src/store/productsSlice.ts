import { TProducts, TProductsCount } from "./../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store, { RootState } from "./store";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    AllProducts: [] as TProducts[],
    CurrentCategory: null as string | null,
    Cart: [] as TProductsCount[],
    TotalPrice: 0 as number,
    CurrentPage: 1 as number,
  },

  reducers: {
    AddProducts: (state, action: PayloadAction<TProducts[]>) => {
      state.AllProducts = action.payload;

      //  state.Cart.push(JSON.parse(localStorage.getItem(''))) error types
    },

    // CATEGORY
    SetCurrentCategory: (state, action: PayloadAction<string>) => {
      if (state.CurrentCategory === action.payload) {
        state.CurrentCategory = null;
      } else {
        state.CurrentCategory = action.payload;
      }
      state.CurrentPage = 1;
    },

    // CART
    AddInCart: (state, action: PayloadAction<TProducts>) => {
      if (state.Cart.find((el) => el.id === action.payload.id)) {
        localStorage.removeItem(action.payload.title);
        // productsSlice.caseReducers.RemoveFromCart(state, action);
        state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
        state.TotalPrice -= action.payload.price;
      } else {
        state.Cart.push({
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
          category: action.payload.category,
          description: action.payload.description,
          image: action.payload.image,
          rating: action.payload.rating,
          count: 1,
        });
        state.TotalPrice += action.payload.price;
        localStorage.setItem(
          action.payload.title,
          JSON.stringify(action.payload)
        );
      }
    },
    ClearCart: (state) => {
      state.Cart.length = 0;
      state.TotalPrice = 0;
      localStorage.clear();
    },

    // Count
    PlusCount: (state, action: PayloadAction<TProductsCount>) => {
      const isFind = state.Cart.find((el) => el.id === action.payload.id);
      if (isFind) {
        isFind.count += 1;
        state.TotalPrice += action.payload.price;
      }
    },
    MinusCount: (state, action: PayloadAction<TProductsCount>) => {
      const isFind = state.Cart.find((el) => el.id === action.payload.id);
      if (isFind && isFind.count > 1) {
        isFind.count -= 1;
        state.TotalPrice -= action.payload.price;
      }
    },
    // Pagination
    ChangeCurrentPage: (state, action: PayloadAction<number>) => {
      state.CurrentPage = action.payload;
    },
    PrevPage: (state) => {
      state.CurrentPage -= 1;
    },
    NextPage: (state) => {
      state.CurrentPage += 1;
    },
  },
});

export const {
  AddProducts,
  SetCurrentCategory,
  AddInCart,
  ClearCart,
  PlusCount,
  MinusCount,
  ChangeCurrentPage,
  PrevPage,
  NextPage,
} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products;
export default productsSlice.reducer;
