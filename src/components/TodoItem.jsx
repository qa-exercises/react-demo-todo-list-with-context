import React from 'react'

export default function TodoItem({ todo, toggleTodo }) {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={todo.isComplete ? 'complete' : ''}
    >
      {todo.title}
    </li>
  )
}
