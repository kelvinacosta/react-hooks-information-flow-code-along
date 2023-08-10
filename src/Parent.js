import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  //Create a variable to change color for children using state
  const [childrenColor, setChildrenColor] = useState("#FFF")

  function hadleChangeColor(newChildrenColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor)
    setChildrenColor(newChildrenColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={hadleChangeColor} color={childrenColor}/>
      <Child onChangeColor={hadleChangeColor} color={childrenColor}/>
    </div>
  );
}

export default Parent;
