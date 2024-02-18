"use client";
import { useState } from "react";

interface Props {
  text: string;
}

function Checkbox({ text }: Props) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
    </div>
  );
}

export default Checkbox;
