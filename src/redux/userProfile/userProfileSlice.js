import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: 'userActivityData',
  initialState: {
    likes: [],
    cartItems: [],
    bookings: [],
    orders: [],
  },
  reducers: {
    likeProduct: (state, action) => {
      state.likes.push(action.payload); // Add liked product to the array
    },
    removeProductLike: (state, action) => {
      state.likes = state.likes.filter(product => product.id !== action.payload.id); // Remove liked product
    },
    getLikes: (state, action) => {
      state.likes = action.payload; // Set likes from API
    },
    addProductToCart: (state, action) => {
      state.cartItems.push(action.payload); // Add product to cart
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload.id); // Remove product from cart
    },
    getCartItems: (state, action) => {
      state.cartItems = action.payload; // Set cart items from API
    },
    // Implement these as needed
    bookProduct: (state, action) => {
      state.bookings.push(action.payload); // Add product to bookings
    },
    removeProductFromBooking: (state, action) => {
      state.bookings = state.bookings.filter(product => product.id !== action.payload.id); // Remove product from bookings
    },
    getProductsToBook: (state, action) => {
      state.bookings = action.payload; // Set bookings from API
    },
  },
});

export const {
  likeProduct,
  removeProductLike,
  getLikes,
  addProductToCart,
  removeProductFromCart,
  getCartItems,
  bookProduct,
  removeProductFromBooking,
  getProductsToBook,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
