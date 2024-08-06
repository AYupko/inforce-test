import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';


interface ProductState {
  products: Product[];
  
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;