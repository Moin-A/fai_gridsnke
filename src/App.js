import styled from "styled-components";

import React, { useState, Component } from "react";

const App = () => {
  const Sdiv = styled.div`
    display: grid;
    grid-template-columns: repeat(10, auto);
    grid-gap: 10px;
    background-color: #2196f3;
    padding: 10px;
    width: 50%;
    margin: 6rem auto;
    .snake_dot {
      position: absolute;
      width: 7px;
      height: 7px;
      background: green;
      border: 1px solid #fff;
      display: flex;
      top: 35%;
    }
    div {
      position: relative;
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid black;
      text-align: center;
      height: 3rem;
      cursor: pointer;
      width: 3rem;
    }
  `;

  return (
    <Sdiv>
      <div>
        <span className="snake_dot" style={{ left: "0" }}></span>
        <span className="snake_dot" style={{ left: "22%" }}></span>
        <span className="snake_dot" style={{ left: "43%" }}></span>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Sdiv>
  );
};

export default App;
