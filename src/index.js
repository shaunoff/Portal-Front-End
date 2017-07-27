import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Routes from "./routes.js"
import reduxThunk from 'redux-thunk';
import NavigationBar from "./components/navbar/NavBar.js"
import rootReducer from './reducers/index.js';
import io from 'socket.io-client';
import App from "./components/App.js"


//let auth = io(`http://localhost:3009/auth`,{query: `token=${localStorage.getItem('token')}`})
// socket.on('disconnect', function(){
//   console.log("disconnected")
// })
// socket.on('connect', function(){
//   console.log("connected")
// })
// socket.on('newEmail', function(email){
//   console.log(email)
// })

const createStoreWithMiddleware = applyMiddleware(reduxThunk,ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer)
const token = localStorage.getItem('token')
if (token){
  store.dispatch({type: "AUTH_USER"})
}


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#app'));
