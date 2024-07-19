// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const LIST_PRODUCTS = 'LIST_PRODUCTS';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const listProducts = (products) => ({
  type: LIST_PRODUCTS,
  payload: products,
});

export const deleteFromCart = (productId) => ({
  type: DELETE_FROM_CART,
  payload: productId,
});
