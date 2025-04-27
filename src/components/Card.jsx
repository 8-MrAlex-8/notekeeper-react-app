import React from "react";
import CardUtility from "./CardUtility";

const cardStyle = {
  boxShadow: "2px 2px 15px 0px rgba(191,191,191,0.75)",
};

function Card(props) {
  return (
    // The card itself
    <div
      className="bg-white rounded-md m-5 h-50 w-2/3 md:w-1/4 flex flex-col justify-between"
      style={cardStyle}
    >
      {/* White part of the card */}
      <div
        className="px-6 pt-3 pb-0 overflow-hidden text-justify group cursor-pointer
      flex flex-col justify-center items-start"
      >
        {/*Notes Content*/}
        <h1 className="transition group-hover:opacity-5 py-3 text-xl font-bold text-left">
          {props.title}
        </h1>

        {/*Notes Content*/}
        <p className="text-sm line-clamp-3 leading-7 transition group-hover:opacity-3">
          {props.content}
        </p>
        {/*See Note prompt*/}
        <p className="hidden group-hover:inline text-md absolute text-gray-700 tracking-wider self-center">
          Read Note
        </p>
      </div>

      {/* Gray part of the card */}
      <CardUtility date={props.date} />
    </div>
  );
}

export default Card;
