import React, { useState } from 'react'
import TodoList from './components/TodoList'
import './style.css'

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React useState', isComplete: true },
    { id: 2, title: 'Learn React useEffect', isComplete: true },
    { id: 3, title: 'Learn React useContext', isComplete: false },
  ])

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
      }))
    )
  }

  return (
    <main>
      <h1>☑️ Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </main>
  )
}
