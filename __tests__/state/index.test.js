import { removeTodoItem } from '../../src/state/index'

// describe('数字加减算术运算', () => {
//   test('3加2减5等于0', () => {
//     expect(3 + 2 - 5).toBe(0)
//   })
// })

describe('待办事项操作测试', () => {
  test('删除待办事项', () => {
    const todos = [
      {id: 1, title: '复习 React 基础知识', completed: true},
      {id: 2, title: '复习 React Hooks 使用', completed: false}
    ]
    const finishedTodos = removeTodoItem(todos, 1)

    expect(finishedTodos).toEqual([{id: 2, title: '复习 React Hooks 使用', completed: false}])
  })
})
