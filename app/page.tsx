"use client";
import React from "react";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

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
