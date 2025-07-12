import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductsFiltered } from '../services/productService';

// Tüm ürünleri çeken thunk
export const getProducts = createAsyncThunk(
  'product/getProducts',
  async () => {
    const data = await fetchProducts();
    return data;
  }
);

// Seçilen kategoriye göre ürünleri filtreli çeken thunk
export const getProductsFiltered = createAsyncThunk(
  'product/getProductsFiltered',
  async (categoryId) => {
    const data = await fetchProductsFiltered(categoryId);
    return data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Tüm ürünler
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Filtreli ürünler
      .addCase(getProductsFiltered.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsFiltered.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsFiltered.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
