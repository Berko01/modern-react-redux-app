// src/features/category/categorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../services/categoryService';

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => {
    const data = await fetchCategories();
    return data;
  }
);

const initialState = {
  currentCategory: null,     
  currentCategoryId: null,    
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.currentCategory = action.payload.categoryName;
      state.currentCategoryId = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
