import React, { useState } from "react";
import Item from "./Item";

interface Props {
  newTask: string;
  Title: string;
}

const NewList = ({ newTask, Title }: Props) => {
  const [list, setList] = useState([""]);
  const HandleClick = () => {
    if (newTask.trim() !== "") {
      setList([...list, newTask]);
    }
  };
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
