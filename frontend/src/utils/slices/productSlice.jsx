import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: null,
    reducers: {
        addProduct: (state, action) => {
            return action.payload;
        },
    }
})

export const { addProduct } = productSlice.actions;
export default productSlice.reducer