import React, { useState } from "react";

export default function TodoItem(props) {
  const [checkedOff, setCheckedOff] = useState(false);

  const checkedOffStyle = {
    textDecoration: "line-through",
    cursor: "pointer",
    display: "inline",
    paddingRight: "32px",
  };
  return (
    <div style={{ padding: "16px" }}>
      <li
        style={
          checkedOff
            ? checkedOffStyle
            : { cursor: "pointer", paddingRight: "32px", display: "inline" }
        }
        onClick={() => setCheckedOff(!checkedOff)}
      >
        {props.item}
      </li>
      <button onClick={() => props.deleteItem(props.index)}>X</button>
    </div>
  );
}
