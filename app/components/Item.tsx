"use client";
import { useState } from "react";

interface Props {
  text: string;
}

function Checkbox({ text }: Props) {
  const [isChecked, setIsChecked] = useState(true);
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const dismissButton = () => {
    setAlertVisibility(!alertVisible);
  };
  return (
    <div>
      {isChecked && (
        <label className="text-lg font-mono">
          <input
            type="checkbox"
            checked={!isChecked}
            onChange={handleCheckboxChange}
          />
          {text}
        </label>
      )}
      {!isChecked && !alertVisible && (
        <div role="alert" className="alert alert-success">
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
      )}
    </div>
  );
}

export default Checkbox;

/* 
<div role="alert" className="alert alert-error">
  
  <span>Error! Task failed successfully.</span>
</div>
*/
