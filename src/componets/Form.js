import React from "react";
import { useState } from "react";

const Form  = ({addTodo}) => {
  const [inputData, setInputData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputData); // Pass the inputData to addTodo function
    setInputData(""); // Clear the input field after adding todo
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default Form;  
