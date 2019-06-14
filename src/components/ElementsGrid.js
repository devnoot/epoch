/**
 * @description This component accepts elements and puts them into the correct grid formatting
 */

import React from "react";

const containerStyles = {
  display: "grid",
  gridGap: "8px 8px",
  // There periodic table of elements has 18 columns.
  gridTemplateColumns:
    "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto",
  justifyContent: "center"
};

const ElementsGrid = ({ children }) => {
  return <div style={containerStyles}>{children}</div>;
};

export default ElementsGrid;
