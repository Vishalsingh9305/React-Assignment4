// src/reducers/productReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, LIST_CART } from '../Actions/ProductActions';

const initialState = {
    products: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 15 },
      { id: 4, name: 'Product 4', price: 25 },
      { id: 5, name: 'Product 5', price: 12 },
      // Add more products as needed
    ],
    cart: []
  };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case LIST_CART:
      return state.cart;
    default:
      return state;
  }
};

export default productReducer;
