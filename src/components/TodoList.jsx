import React from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList(props) {
  const {todos, toggle, remove} = props
  const _renderTodo = () => (
    todos.map(todo => (
      <li>
        <TodoItem key={todo.id} todo={todo} toggle={toggle} remove={remove} />
      </li>
    ))
  )

  return (
    <ul>
      { _renderTodo() }
    </ul>
  )
}
