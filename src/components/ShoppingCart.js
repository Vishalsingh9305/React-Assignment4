// src/components/ShoppingCart.js

import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../Actions/ProductActions';
import '../App.css';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);
