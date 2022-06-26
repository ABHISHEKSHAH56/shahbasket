import React from 'react';
import { AuthProvider } from './Context/authContext';
import Routes from './navigations/routes';
import {LogBox} from "react-native";
import {  CartProvider } from './Context/cartContext';

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;