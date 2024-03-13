// App.js
import React, { useState } from 'react';
import './App.css';


import Form from './componets/Form';
import TodoItem from './componets/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  
  function addTodo(todoText) {
    if (todoText.trim() === "") {
      
      return;
    }
    setTodos([...todos, { id: Date.now(), text: todoText }]);
  }

  
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


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
