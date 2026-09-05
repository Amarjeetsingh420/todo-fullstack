"use client";
import { useState } from "react";
export default function Home(){
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([])
  function addTodo() {
    setTodos([...todos, todo]);
    setTodo("")
    console.log(todo);
  }
  return (
    <main>
      <h1>My Todo App</h1>
      <input type="text"
      placeholder="Enter a todo..."
      value={todo}
      onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <p>{todos.length}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  )
}