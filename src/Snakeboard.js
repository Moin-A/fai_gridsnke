import React from "react";

const SnakeBoard = () => {
  let initialRows = [];
  for (let i = 0; i < 10; i++) {
    initialRows.push([]);
    for (let k = 0; k < 10; k++) {
      initialRows[i].push("blank");
    }
  }
  return <div></div>;
};

export default SnakeBoard;
