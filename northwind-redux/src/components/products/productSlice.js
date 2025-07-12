import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductsFiltered,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService';

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const data = await fetchProducts();
  return data;
});

export const getProductsFiltered = createAsyncThunk(
  'product/getProductsFiltered',
  async (categoryId) => {
    const data = await fetchProductsFiltered(categoryId);
    return data;
  }
);

export const createProductSuccess = createAsyncThunk(
  'product/createProduct',
  async (productData) => {
    const data = await createProduct(productData);
    return data;
  }
);

export const updateProductSuccess = createAsyncThunk(
  'product/updateProduct',
  async ({ productId, updatedData }) => {
    const data = await updateProduct(productId, updatedData);
    return data;
  }
);

export const deleteProductSuccess = createAsyncThunk(
  'product/deleteProduct',
  async (productId) => {
    await deleteProduct(productId);
    return productId;
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
      })

      .addCase(createProductSuccess.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      .addCase(updateProductSuccess.fulfilled, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProductSuccess.fulfilled, (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
