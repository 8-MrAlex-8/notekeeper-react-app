import React from "react";
import Card from "./Card";

function CardGroup() {
  return (
    <div className="flex flex-wrap justify-center h-auto">
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
