import React from "react";
import { Pencil, Trash, Copy } from "lucide-react";

function CardUtility() {
  return (
    <div className="flex justify-center bg-gray-300 gap-6 rounded-b-lg py-2">
      <Pencil color="black" size={20} />
      <Trash color="black" size={20} />
      <Copy color="black" size={20} />
    </div>
  );
}

export default CardUtility;
