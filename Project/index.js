/**
 * @format
 */
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
// import DataProvider from './Redux/Store';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './Redux/Store';
const store = configureStore();
 
 
 const NewApp = () => {
   return (
     <StoreProvider store={store}>
       <App />
     </StoreProvider>
   );
 };
 
 AppRegistry.registerComponent(appName, () => NewApp);
