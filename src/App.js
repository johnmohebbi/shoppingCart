import React from "react";
//context 
import ProductsContextProvider from "./context/ProductsContextProvider";
function App() {
  
  return (
    <div >
      <ProductsContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
