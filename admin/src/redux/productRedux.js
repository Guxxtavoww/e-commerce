import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getProductStart: state => {
            state.isFetching = true;
            state.error = false;
            state.products = [];
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.products = action.payload;
        },
        getProductFailure: state => {
            state.isFetching = false;
            state.error = true;
            state.products = [];
        },
        deleteProductStart: state => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(state.products.findIndex(item => item._id === action.payload), 1);
        },
        deleteProductFailure: state => {
            state.isFetching = false;
            state.error = true;
        }
    } 
});

export default productSlice.reducer;
export const { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure } = productSlice.actions;