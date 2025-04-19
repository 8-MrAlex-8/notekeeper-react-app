import React from "react";

const headerStyle = {
  height: "15dvh",
};

// header: 20vh
function Header() {
  return (
    <header className="bg-gray-800 text-white h-2/5 mb-8" style={headerStyle}>
      <h1 className="text-3xl ml-4"> K-NOTE App </h1>
    </header>
  );
}

export default Header;
