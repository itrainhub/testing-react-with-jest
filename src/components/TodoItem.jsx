import React, { useCallback } from 'react'

export default function TodoItem(props) {
  const { todo: { id, title, completed }, toggle, remove } = props

  const handleToggle = useCallback(() => toggle(id))

  const handleRemove = useCallback(e => {
    e.preventDefault()
    remove(id)
  })

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <p onClick={handleToggle}>{ title }</p>
      <a href="/" onClick={handleRemove}>删除</a>
    </div>
  )
}
