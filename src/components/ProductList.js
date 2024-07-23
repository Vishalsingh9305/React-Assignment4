// src/components/ProductList.js

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/ProductActions';
import '../App.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps, { addToCart })(ProductList);
