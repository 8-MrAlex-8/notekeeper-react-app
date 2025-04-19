import React from "react";
import { Pencil, Trash, Copy } from "lucide-react";

function CardUtility(props) {
  return (
    <div className="flex justify-between md:justify-center lg:justify-between items-center bg-gray-300 rounded-b-lg py-2 px-8">
      <div className="block md:hidden lg:block text-gray-600">
        <p className="text-xs">{props.date}</p>
      </div>

      <section className="buttons flex justify-center items-center gap-5">
        <div className="text-black hover:text-yellow-500 cursor-pointer transition-colors duration-150">
          <Pencil size={20} />
        </div>
        <div className="text-black hover:text-red-500 cursor-pointer transition-colors duration-150">
          <Trash size={20} />
        </div>
        <div className="text-black hover:text-green-500 cursor-pointer transition-colors duration-150">
          <Copy size={20} />
        </div>
      </section>
    </div>
  );
}

export default CardUtility;
