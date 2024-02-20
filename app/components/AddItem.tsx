import React, { useState } from "react";
import Item from "./Item";

function AddItem() {
  const [items, setItems] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => index > 0 && <Item text={item}></Item>)}
      </ul>
      <div className="fixed bottom-10 left-0 right-0">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item..."
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-outline btn-primary" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
