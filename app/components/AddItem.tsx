"use client";
import React, { useState } from "react";
import AddCategory from "./AddCategory";

/*
This component ties everything together and is used to get input
from the user, which is then passed to the next component to be processed.
*/
function AddItem() {
  // inputValue stores the data that is entered in the textbox.
  const [inputValue, setInputValue] = useState("");

  // changes inputValue as it is being entered in the input box.
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /* 
  dividing the page into three columns and using the NewList component to create 
  multiple lists with different titles using Props. The user input is passed to 
  each, but is appened only to the list where the user wants to add that task.
  */
  return (
    <div>
      <AddCategory newTask={inputValue}></AddCategory>
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
