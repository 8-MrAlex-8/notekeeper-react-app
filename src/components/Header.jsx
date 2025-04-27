import React from "react";
import { FilePlus2 } from "lucide-react";

const headerStyle = {
  height: "15dvh",
};

// header: 20vh
function Header() {
  return (
    <header
      className="bg-gray-800 text-white h-2/5 mb-8 flex justify-between items-center"
      style={headerStyle}
    >
      <p className="text-3xl ml-4 text-left"> K-NOTE App </p>
      <div
        className="flex justify-center items-center gap-4 bg-cyan-700 p-3 mr-8 rounded-md
      cursor-pointer hover:bg-cyan-600"
      >
        <FilePlus2 />
        <p>New Note</p>
      </div>
    </header>
  );
}

export default Header;
