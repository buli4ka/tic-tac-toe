import React from 'react'
import { useEffect } from 'react'
export const Board = ({ fieldSize, moveHandler, setField }) => {
  var rows = [];

  for (var i = 0; i < fieldSize; i++)
    for (var j = 0; j < fieldSize; j++)
      rows.push(<button id={i + ' ' + j} className={require("../config/config").classNames.cellClassName} onClick={moveHandler}></button>);
  
  useEffect(() => {
    let a = document.querySelector('.'+require("../config/config").classNames.gridClassName);
    a.style.cssText = ` display: grid;
      grid-template-columns: repeat(${fieldSize}, 100px);
      grid-auto-rows: 100px;`;
  });

  return (
    <>
      {rows}
    </>
  )
}