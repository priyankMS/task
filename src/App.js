// App.js
import React, { useState } from 'react';
import './App.css';


import Form from './componets/Form';
import TodoItem from './componets/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  function addTodo(todoText) {
    if (todoText.trim() === "") {
      // Don't add empty string as a todo
      return;
    }
    setTodos([...todos, { id: Date.now(), text: todoText }]);
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Function to update a todo
  function updateTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <TodoItem  todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
