import { nanoid } from 'nanoid'

/**
 * 初始化待办事项列表数组
 */
export const initialTodos = Array(3).fill(null).map(() => ({
  id: nanoid(),
  title: '待办事项' + nanoid(),
  completed: false
}))

/**
 * 添加待办事项
 * @param {*} todos 待办事项列表
 * @param {*} todo 待添加待办事项
 * @returns 
 */
export const addTodoItem = (todos, todo) => [
  ...todos,
  {
    ...todo,
    id: nanoid(),
    completed: false
  }
]

/**
 * 根据 id 切换待办事项完成状态
 * @param {*} todos 待办事项列表
 * @param {*} id 待切换状态待办事项 id
 * @returns 
 */
export const toggleTodoItem = (todos, id) => todos.map(todo => {
  if (todo.id === id) {
    todo.completed = !todo.completed
  }
  return todo
})

/**
 * 根据 id 删除待办事项
 * @param {*} todos 待办事项列表
 * @param {*} id 待删除待办事项 id
 * @returns 
 */
export const removeTodoItem = (todos, id) => todos.filter(todo => todo.id !== id)
