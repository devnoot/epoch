import React from "react";

const Popover = ({ isActive, content, mouseX, mouseY }) => {
  const popoverStyles = {
    position: "absolute",
    width: "400",
    height: "100",
    top: mouseY + 32,
    left: mouseX + 32,
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "4px 8px"
  };

  return isActive ? (
    <div style={popoverStyles}>
      <p>{content}</p>
    </div>
  ) : (
    <div />
  );
};

export default Popover;
