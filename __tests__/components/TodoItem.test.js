import React from 'react'
import { mount } from 'enzyme'
import TodoItem from '../../src/components/TodoItem.jsx'

describe('待办事项-列表项组件', () => {
  test('渲染待办事项列表项', () => {
    const todo = {id: 2, title: '复习 React Hooks 使用', completed: false}
    const wrapper = mount(
      <TodoItem todo={todo} />
    )
    const p = wrapper.find('p')
    expect(p.text()).toBe('复习 React Hooks 使用')
  })

  test('点击修改待办事项状态', () => {
    const toggle = jest.fn()
    const todo = {id: 2, title: '复习 React Hooks 使用', completed: false}
    const wrapper = mount(
      <TodoItem todo={todo} toggle={toggle} />
    )
    const p = wrapper.find('p')
    p.simulate('click')
    expect(toggle).toBeCalledWith(2)
  })
})
