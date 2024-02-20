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
      <div className="grid justify-items-stretch grid-cols-3 ">
        <div className="justify-self-center">
          <NewList newTask={inputValue} Title="School" />
        </div>
        <div className="justify-self-center">
          <NewList newTask={inputValue} Title="Home" />
        </div>
        <div className="justify-self-center">
          <NewList newTask={inputValue} Title="General" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 pb-7">
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
