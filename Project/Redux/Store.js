import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index'
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const configureStore = () => createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))
const configureStore = () => createStore(rootReducer);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

function DataProvider({children}) {
  return <Provider store={store}>{children}</Provider>;
}

export default configureStore;
