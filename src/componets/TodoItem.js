// TodoItem.js
import React, { useState } from "react";


function TodoItem({ todos, deleteTodo, updateTodo }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedText, setUpdatedText] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  function handleUpdate(id) {
    if (updatedText.trim() === "") {
      return;
    }
    updateTodo(id, updatedText);
    setUpdateMode(false);
    setSelectedTodoId(null);
    setUpdatedText("");
  }

  return (
    <div className="todo-item">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {updateMode && selectedTodoId === todo.id ? (
            <div>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>Update</button>
            </div>
          ) : (
            <div  >
              <div >{todo.text}
              <span className="todo-buton">
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => {
                    setUpdateMode(true);
                    setSelectedTodoId(todo.id);
                    setUpdatedText(todo.text);
                  }}
                >
                  Update
                </button>
              </span>
            </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
