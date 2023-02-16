import React, { useState } from "react";
import CardContext from "./CardContext";

const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState({});

  const updateCardData = (data) => {
    setCardData(data);
  };

  return (
    <CardContext.Provider value={{ cardData, updateCardData }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
