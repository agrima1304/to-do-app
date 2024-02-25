import React, { useState } from "react";
import SuccessAlert from "./Alert";
import Item from "./Item";

/*
  This component asks the user to confirm if the task if finished in case the checkbox
  is clicked by accident.
*/
interface Props {
  isChecked: boolean;
  text: string;
}

function ConfirmationDialogue({ isChecked, text }: Props) {
  const [isOpen, setOpen] = useState(isChecked);
  const [isConfirmed, setConfirmation] = useState(false);

  // when user confirms task is completed
  const handleConfirmation = () => {
    setOpen(false);
    setConfirmation(true);
  };

  // when user indicates task is not completed
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
            <div className="grid justify-items-center grid-cols-2">
              <button
                className="btn btn-outline btn-success"
                onClick={handleConfirmation}
              >
                Yes
              </button>
              <button
                className="btn btn-outline btn-error"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {isConfirmed ? <SuccessAlert></SuccessAlert> : <Item text={text}></Item>}
    </>
  );
}

export default ConfirmationDialogue;
