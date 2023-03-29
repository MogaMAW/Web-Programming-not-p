import React, { useState } from "react";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handleButtonClick}>Dashboard</button>
      {isMenuOpen && (
        <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column" }}>
          <button style={{ display: "block" }}>ADD ANOTHER ADMIN</button>
          <button style={{ display: "block" }}>ADD A VOTER</button>
          <button style={{ display: "block" }}>ADD A CANDIDATE</button>
          <button style={{ display: "block" }}>BACK</button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;


