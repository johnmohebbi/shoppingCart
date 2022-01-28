import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
//components
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import Details from "./components/shared/Details";
import Cart from "./components/shared/Cart";
//context
// import ProductsContextProvider from "./context/ProductsContextProvider";
// import CartContextProvider from './context/CartContextProvider';
//redux
import store from "./redux/store";
function App() {

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={Details} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={Cart} />
          <Redirect to="/products" />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
