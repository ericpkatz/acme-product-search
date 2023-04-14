import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import axios from 'axios';

const products = (state = [], action)=> {
  if(action.type === 'SET_PRODUCTS'){
    return action.products;
  }
  return state;
};

export const fetchProducts = ()=> {
  return async(dispatch)=> {
    return dispatch({ type: 'SET_PRODUCTS', products: (await axios.get('/api/products')).data});
  };
};

const reducer = combineReducers({
  products
});

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;
