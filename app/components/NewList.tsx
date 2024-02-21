import React, { useState } from "react";
import Item from "./Item";

/*
This component makes a list and also adds items to that list using the 
parameters passed.
*/
interface Props {
  newTask: string;
  Title: string;
}

const NewList = ({ newTask, Title }: Props) => {
  // the list of tasks and a way to add to the tasks.
  const [list, setList] = useState([""]);

  // when the button is clicked, the inputValue parameter is added to the list (after validation)
  const HandleClick = () => {
    if (newTask.trim() !== "") {
      setList([...list, newTask]);
    }
  };

  // Each item in the list is output to the user using the Item component
  // the button is used to add tasks to the list.
  return (
    <div>
      <button className="btn btn-outline btn-secondary" onClick={HandleClick}>
        Add to {Title}
      </button>
      <ul>
        {list.map((item, index) => index > 0 && <Item text={item}></Item>)}
      </ul>
    </div>
  );
};

export default NewList;
