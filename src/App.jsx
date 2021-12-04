import React, { useState, useCallback } from 'react'
import TodoHeader from './components/TodoHeader.jsx'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'
import { initialTodos, addTodoItem, toggleTodoItem, removeTodoItem } from './state/index'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState(initialTodos)

  const onAddTodoItem = useCallback(todo => setTodos(addTodoItem(todos, todo)), [todos])
  const onToggleTodoItem = useCallback(id => setTodos(toggleTodoItem(todos, id)), [todos])
  const onRemoveTodoItem = useCallback(id => setTodos(removeTodoItem(todos, id)), [todos])

  return (
    <div>
      <TodoHeader />
      <TodoInput add={onAddTodoItem} />
      <TodoList todos={todos} toggle={onToggleTodoItem} remove={onRemoveTodoItem} />
    </div>
  )
}
