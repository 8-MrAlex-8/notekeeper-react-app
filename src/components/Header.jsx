import React from "react";

const headerStyle = {
  backgroundColor: "#31393c",
  color: "#f5f5f5",
  alignItems: "start",
};

function Header() {
  return (
    <header className="h-20" style={headerStyle}>
      <h1 className="text-2xl ml-4"> K-NOTE App </h1>
    </header>
  );
}

export default Header;
