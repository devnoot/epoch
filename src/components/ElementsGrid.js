/**
 * @description This component accepts elements and puts them into the correct grid formatting
 */

import React from "react";

const containerStyles = {
  display: "grid",
  gridGap: "16px 16px",
  // There periodic table of elements has 18 columns.
  gridTemplateColumns:
    "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto",
  gridTemplateRows: "auto auto auto auto auto auto auto auto auto",
  justifyContent: "center"
};

const ElementsGrid = ({ children }) => {
  return <div style={containerStyles}>{children}</div>;
};

export default ElementsGrid;
