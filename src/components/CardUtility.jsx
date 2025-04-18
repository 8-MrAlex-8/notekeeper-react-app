import React from "react";
import { Pencil, Trash, Copy } from "lucide-react";

function CardUtility() {
  return (
    <div className="flex justify-center bg-gray-300 gap-6 rounded-b-lg py-2">
      <div className="text-black hover:text-yellow-500 cursor-pointer transition-colors duration-150">
        <Pencil size={20} />
      </div>
      <div className="text-black hover:text-red-500 cursor-pointer transition-colors duration-150">
        <Trash size={20} />
      </div>
      <div className="text-black hover:text-green-500 cursor-pointer transition-colors duration-150">
        <Copy size={20} />
      </div>
    </div>
  );
}

export default CardUtility;
