import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../actions';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
