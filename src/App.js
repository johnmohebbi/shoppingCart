import React from "react";
//components
import Store from "./components/Store";
//context 
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from './context/CartContextProvider';
function App() {
  
  return (
    <div >
      <ProductsContextProvider>
        <CartContextProvider>
        <Store />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
