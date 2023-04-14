import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Products = ()=> {
  const filterString = useParams().filter;
  const filter = filterString ? JSON.parse(filterString) : {};
  const navigate = useNavigate();
  const { products } = useSelector(state => state);


  const search = ev => {
    const _filter = {...filter };
    if(ev.target.name === 'inStock'){
      if(ev.target.checked){
        _filter.inStock = true;
      }
      else {
        delete _filter.inStock;
      }
    }
    else if(ev.target.name === 'name'){
      if(ev.target.value){
        _filter.name = ev.target.value;
      }
      else {
        delete _filter.name;
      }
    }
    navigate(`/products/${JSON.stringify(_filter)}`);
  };
  const filtered = products.filter(product => {
    if(filter.name && !product.name.includes(filter.name)){
      return false;
    }
    if(filter.inStock && !product.inStock){
      return false;
    }
    return true;
  });

  return (
    <div>
      <form onSubmit={ ev => ev.preventDefault()}>
        <label>
          <input placeholder='search by name' value={ filter.name || '' } autoComplete='off' onChange={ search } name='name' />
        </label>
        <label>
          in stock only
          <input checked={ filter.inStock || false} name='inStock' onChange={ search } type='checkbox' />
        </label>
      </form>
      { !filtered.length && <Link to='/products'>Reset??</Link>}
      <ul>
        {
          filtered.filter(product => {
            if(filter.name && !product.name.includes(filter.name)){
              return false;
            }
            if(filter.inStock && !product.inStock){
              return false;
            }
            return true;
          }).map( product => {
            return (
              <li key={ product.id }>
                { product.name }
                { !!product.inStock && <em> is in stock</em>}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
