import Header from "./components/Header"
import Product from "./components/Product"
import React from "react";
import { AppContextProvider } from "./context/AppContextProvider";
import { Provider } from "react-redux";
import store from "./saga/store-saga";

function App() {
 
  return (
    <Provider store={store}>
      <AppContextProvider>
        <div className="container mx-auto max-w-screen-lg">
          <Header />
          <Product className="m-4" />
        </div>
      </AppContextProvider>
    </Provider>
  );
}

export default App
