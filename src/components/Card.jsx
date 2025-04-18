import React from "react";
import CardUtility from "./CardUtility";

const cardStyle = {
  width: "clamp(20%, 24%, 28%)",
  boxShadow: "2px 2px 15px 0px rgba(191,191,191,0.75)",
};

function Card() {
  return (
    <div
      className="bg-white rounded-lg m-5 h-50 flex flex-col justify-between"
      style={cardStyle}
    >
      <p className="px-3 pt-3 pb-0 overflow-hidden line-clamp-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <CardUtility />
    </div>
  );
}

export default Card;
