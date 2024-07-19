// src/reducers/index.js

import { combineReducers } from 'redux';
import { ADD_TO_CART, LIST_PRODUCTS, DELETE_FROM_CART } from '../actions';

const initialProductsState = {
  products: [],
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const initialCartState = {
  cart: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product already exists in cart
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If product exists, do not add again
        return state;
      } else {
        // If product does not exist, add to cart
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
