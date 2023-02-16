import React from "react";
import CardProvider from "./configuration/CardProvider";
import ProductList from "./Components/ProductList";
import CheckoutPage from "./Components/Checkout/CheckoutPage";

const App = () => {
  return (
    <CardProvider>
      <ProductList />
      <CheckoutPage />
    </CardProvider>
  );
};

export default App;
