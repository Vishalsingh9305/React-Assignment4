// src/components/ProductList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, addToCart } from '../actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    // Simulated fetch products from API or local storage
    const fetchedProducts = [
      { id: 1, name: 'Product A', price: 10 },
      { id: 2, name: 'Product B', price: 15 },
      { id: 3, name: 'Product C', price: 20 },
    ];
    dispatch(listProducts(fetchedProducts));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
