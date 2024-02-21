import React from "react";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

/*
This is the file for the home page of the website. 
At the top, I have the title and then my main component.
*/
export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-mono font-bold text-center py-5">
        To Do List
      </h1>
      <AddItem></AddItem>
    </>
  );
}
