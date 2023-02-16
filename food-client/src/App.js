import React from "react";
import CardProvider from "./configuration/CardProvider";
import ProductList from "./Components/ProductList";

const App = () => {
  return (
    <CardProvider>
      <ProductList />
    </CardProvider>
  );
};

export default App;

