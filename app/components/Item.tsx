"use client";
import { useState } from "react";
import SuccessAlert from "./Alert";
import ConfirmationDialogue from "./ConfirmationDialog";

/*
This component is used to create one of the tasks on a list. 
It is also responsible for not rendering the task once it is marked as Done.
Lastly, it also displays the alert to the user when a task is complete.
*/
interface Props {
  text: string;
}

function Checkbox({ text }: Props) {
  // isChecked indicates if checkbox is checked
  // alertVisible indicates if the alert is being rendered
  const [isChecked, setIsChecked] = useState(false);
  const [isConfirmed, setConfirmation] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    setConfirmation(!isConfirmed);
  };

  /*
   using a conditional ternary operator to render the task if checkbox not 
   checked, and render the alert if it is checked.
  */
  return (
    <div>
      {isChecked ? (
        <ConfirmationDialogue
          isChecked={isChecked}
          text={text}
        ></ConfirmationDialogue>
      ) : (
        <label className="text-lg font-mono">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {text}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
