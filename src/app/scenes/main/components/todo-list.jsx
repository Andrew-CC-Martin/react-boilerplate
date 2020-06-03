import React from 'react'
import {
  arrayOf, shape, number, string,
} from 'prop-types'

import Todo from './todo'

const TodoList = ({ todos }) => (
  <>
    {
      todos.map(({ id, text }) => (
        <Todo
          key={id}
          text={text}
        />
      ))
    }
  </>
)
TodoList.propTypes = {
  todos: arrayOf(shape({
    id: number,
    text: string,
  })),
}
TodoList.defaultProps = {
  todos: [],
}

export default TodoList
