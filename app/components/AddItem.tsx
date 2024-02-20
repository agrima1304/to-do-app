import React, { useState } from "react";
import Item from "./Item";
import NewList from "./NewList";

function AddItem() {
  const [items, setItems] = useState([[""]]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-3">
        <NewList newTask={inputValue} Title="School" />
        <NewList newTask={inputValue} Title="Home" />
        <NewList newTask={inputValue} Title="General" />
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item..."
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default AddItem;
