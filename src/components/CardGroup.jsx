import React from "react";
import Card from "./Card";

const heightSet = {
  minHeight: "75dvh",
};

function CardGroup() {
  return (
    <div
      className="flex flex-wrap justify-center items-center gap-4"
      style={heightSet}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardGroup;
