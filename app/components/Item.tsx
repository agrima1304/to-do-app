"use client";
import { useState } from "react";

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
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const dismissButton = () => {
    setAlertVisibility(!alertVisible);
  };

  /*
   using a conditional ternary operator to render the task if checkbox not 
   checked, and render the alert if it is checked.
  */
  return (
    <div>
      {isChecked ? (
        !alertVisible && (
          <div role="alert" className="alert alert-success justify-self-center">
            <div>
              <span>Well done on completing the task!</span>
            </div>
            <button onClick={dismissButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        )
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
