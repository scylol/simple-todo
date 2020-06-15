import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const formSubmit = event => {
    event.preventDefault();
    setTodoItems([...todoItems, inputValue]);
    setInputValue("");
  };

  const deleteItem = index => {
    let newItemList = todoItems;
    newItemList.splice(index, 1);
    setTodoItems([...newItemList]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={formSubmit}>
        <input
          value={inputValue}
          type="text"
          onChange={e => setInputValue(e.target.value)}
        />
        <input value="Submit" type="submit" />
      </form>

      {todoItems.length > 0
        ? todoItems.map((item, index) => {
            return (
              <TodoItem
                item={item}
                index={index}
                deleteItem={deleteItem}
              ></TodoItem>
            );
          })
        : ""}
    </div>
  );
}
