import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(p => p.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Aynı üründen varsa miktarı artır
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // Yeni ürünse sepete ekle
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(p => p.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
