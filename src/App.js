import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles.css';

const App = () => {
  return (
    <div>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;