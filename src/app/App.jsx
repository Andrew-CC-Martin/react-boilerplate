import React from 'react'

// style
import GlobalStyle from './global-style'

// components
import OuterContainer from './scenes/main/outer-container'
import InputTodo from './scenes/main/components/input-todo'
import TodoList from './scenes/main/components/todo-list'

const todos = [
  {
    id: 1,
    text: 'buy milk',
  },
  {
    id: 2,
    text: 'go to post office',
  },
  {
    id: 3,
    text: 'call mum',
  },
]


const App = () => (
  <>
    <OuterContainer>
      <h1>Todo List</h1>
      <InputTodo />
      <TodoList
        todos={todos}
      />
    </OuterContainer>
    <GlobalStyle />
  </>
)

export default App
