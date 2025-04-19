import React from "react";
import CardUtility from "./CardUtility";

const cardStyle = {
  boxShadow: "2px 2px 15px 0px rgba(191,191,191,0.75)",
};

function Card(props) {
  return (
    <div
      className="bg-white rounded-md m-5 h-50 w-2/3 md:w-1/4 flex flex-col justify-between"
      style={cardStyle}
    >
      <p className="px-6 pt-3 pb-0 overflow-hidden line-clamp-6 text-justify">
        {props.content}
      </p>
      <CardUtility date={props.date} />
    </div>
  );
}

export default Card;
