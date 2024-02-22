import React, { useState } from "react";
import SuccessAlert from "./Alert";
import Item from "./Item";

interface Props {
  isChecked: boolean;
  text: string;
}

function ConfirmationDialogue({ isChecked, text }: Props) {
  const [isOpen, setOpen] = useState(isChecked);
  const [isConfirmed, setConfirmation] = useState(false);

  const handleConfirmation = () => {
    setOpen(false);
    setConfirmation(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setConfirmation(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
            <p>Are you sure you want to remove this task?</p>
            <button
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleConfirmation}
            >
              Yes
            </button>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleCancel}
            >
              No
            </button>
          </div>
        </div>
      )}
      {isConfirmed ? <SuccessAlert></SuccessAlert> : <Item text={text}></Item>}
    </>
  );
}

export default ConfirmationDialogue;
