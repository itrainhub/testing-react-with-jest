import React, { useEffect, useState, useCallback, useRef } from 'react'

export default function TodoInput(props) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const handleChange = useCallback(e => setInput(e.target.value))

  const handleAdd = useCallback(() => {
    inputRef.current.focus()
    if (input.trim().length === 0) {
      return
    }
    props.add({title: input})
    setInput('')
  })

  const handleKeyDown = useCallback(e => {
    if (e.key.toLowerCase() === 'enter') {
      handleAdd()
    }
  })

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="add">
      <input
        type="text"
        placeholder="请输入新待办事项"
        value={input}
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>添加</button>
    </div>
  )
}
