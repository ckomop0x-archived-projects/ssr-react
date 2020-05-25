import React from "react";
import { useState } from "react";

const TestPage = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter some text"
      />
      <p>{inputText}</p>
    </>
  );
};

export default TestPage;
