import { TProducts } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


const productsSlice = createSlice({
    name: 'products',
    initialState:{
        AllProducts: [] as TProducts[],
        CurrentCategory: null as string | null,
        Cart: [] as TProducts[]
    } ,

    reducers: {
        AddProducts:(state, action: PayloadAction<TProducts[]>) =>{
             state.AllProducts = action.payload
        },

        // CATEGORY
        SetCurrentCategory:(state, action: PayloadAction<string>) =>{
            if(state.CurrentCategory === action.payload){
                state.CurrentCategory = null
            } else{
                state.CurrentCategory = action.payload
            }
        }, 

        // CART
        AddInCart:(state, action: PayloadAction<TProducts>) =>{
            if(state.Cart.find((el) => el.id === action.payload.id)) {
                console.log('incr')

                productsSlice.caseReducers.RemoveFromCart(state, action)
            } else{
                state.Cart.push({
                    title : action.payload.title,
                    id : action.payload.id,
                    price : action.payload.price,
                    category : action.payload.category,
                    description : action.payload.description,
                    image : action.payload.image,
                    rating : action.payload.rating,
                })
            } 
        },
        RemoveFromCart:(state, action: PayloadAction<TProducts>) =>{
            state.Cart = state.Cart.filter(item => item.id !== action.payload.id);
        },

        //  -----------------------LocalStorage
    
}})

export const { AddProducts, SetCurrentCategory, AddInCart, RemoveFromCart} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products
export default productsSlice.reducer;