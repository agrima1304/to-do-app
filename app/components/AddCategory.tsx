import React, { useState } from "react";
import NewList from "./NewList";
// hello world
interface Props {
  newTask: string;
}
const AddCategory = ({ newTask }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [renderInput, setRenderInput] = useState(false);
  const [categoryNames, setCategoryName] = useState([""]);

  const handleNewField = () => {
    setRenderInput(!renderInput);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnter = (data) => {
    setRenderInput(!renderInput);
    if (data.trim() !== "") {
      setCategoryName([...categoryNames, data]);
    }
  };

  return (
    <>
      <button className="btn btn-outline btn-circle" onClick={handleNewField}>
        Add Category
      </button>
      <div>
        {renderInput && (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter item..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
        )}
      </div>
      <button
        className="btn btn-outline btn-primary"
        onClick={handleEnter(inputValue)}
      >
        Enter
      </button>
      <div className="grid justify-items-stretch grid-cols-3 ">
        <div className="justify-self-center">
          {categoryNames.map(
            (name, index) =>
              index > 0 && <NewList newTask={newTask} Title={name} />
          )}
        </div>
      </div>
    </>
  );
};

export default AddCategory;
