import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux'


import { createStore } from 'redux'
import manageRestaurants from './reducers/manageRestaurants'
// function(){}

// we wrap store in a function for testing purposes
export function configureStore(){
  return createStore(manageRestaurants)

}

let store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App store={store}/>
//   </Provider>
//     ,
//     document.getElementById('root')
//
// );
