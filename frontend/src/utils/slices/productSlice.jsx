import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../constants';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const res = await axios.get(base_url + "/api/products", { withCredentials: true });
    return res.data.data;
});

export const addProduct = createAsyncThunk('product/addProduct', async (newProduct) => {
    const res = await axios.post(base_url + "/api/products", newProduct, { withCredentials: true });
    return res.data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
    await axios.delete(base_url + `/api/products/${id}`, { withCredentials: true });
    return id;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        status: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
        },
        addNewProduct: (state, action) => {
            state.productList.push(action.payload);
        },
        existingProductDelete: (state, action) => {
            state.productList = state.productList.filter(product => product._id !== action.payload);
        },
        modifyProduct: (state, action) => {
            const index = state.productList.findIndex(product => product._id === action.payload._id)
            if (index !== -1) {
                state.productList[index] = { ...state.productList[index], ...action.payload };
            }
        }
    },
});

export const { setProducts, addNewProduct, existingProductDelete , modifyProduct } = productSlice.actions;
export default productSlice.reducer;