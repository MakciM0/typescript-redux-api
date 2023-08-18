import axios from "axios";

const base_URL = 'https://fakestoreapi.com/products';




export const getProducts = (() =>{
    axios.get(base_URL).then((response) => {
        return response.data;
    }
    
)});

