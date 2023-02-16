import React, { useContext } from "react";
import CardContext from "../configuration/CardContext";

const Card = () => {
  const { cardData, updateCardData } = useContext(CardContext);

  const handleCardClick = () => {
    updateCardData({
      title: "New Title",
      description: "New Description",
    });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </div>
  );
};

export default Card;
