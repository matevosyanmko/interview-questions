import React, { ChangeEvent, Fragment, useRef, useState } from "react";

const TogglePasswordVisibility = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("password");
  const inputRef = useRef<HTMLInputElement>(null);

  const onToggleButtonClick = () => {
    setInputType((prev) => (prev === "text" ? "password" : "text"));
    inputRef.current?.focus();
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <Fragment>
      <input
        type={inputType}
        ref={inputRef}
        value={inputValue}
        onChange={onInputChange}
      />
      <button onClick={onToggleButtonClick}>Toggle</button>
    </Fragment>
  );
};

export default TogglePasswordVisibility;
