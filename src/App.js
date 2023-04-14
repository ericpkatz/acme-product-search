import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store';
import { Link, Routes, Route } from 'react-router-dom';
import Products from './Products';

const App = ()=> {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  useEffect(()=> {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1><Link to='/'>Acme Product Search</Link></h1>
      <Link to='/products'>Products ({ products.length })</Link>
      <Routes>
        <Route path='/products' element={ <Products /> } />
        <Route path='/products/:filter' element={ <Products /> } />
      </Routes>
    </div>
  );
};

export default App;
