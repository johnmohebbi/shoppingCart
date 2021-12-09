import React from "react";
//components
import Store from "./components/Store";
//context 
import ProductsContextProvider from "./context/ProductsContextProvider";
function App() {
  
  return (
    <div >
      <ProductsContextProvider>
        <Store />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
