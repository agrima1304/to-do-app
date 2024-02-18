"use client";
import React from "react";
import Item from "./Item";
import { useState } from "react";

const CreateItem = () => {
  const [showItem, setShowItem] = useState(false);
  const [inputValue, setInputValue] = useState();

  const handleClick = () => {
    setShowItem(true);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <button onClick={handleClick}> Create New Task </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <Item text={inputValue}></Item>
    </>
  );
};

export default CreateItem;
