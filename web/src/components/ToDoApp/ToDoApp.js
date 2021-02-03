import ToDoInput from '../ToDoInput/ToDoInput'
import ToDoTable from '../ToDoTable/ToDoTable'
import { useState } from 'react'
import toggleComplete from '../../util/toggleComplete'

const ToDoApp = () => {
  const initialTodos = [
    {
      id: 1,
      text: 'Walk dog',
      isComplete: false,
    },
    {
      id: 2,
      text: 'Wash dishes',
      isComplete: false,
    },
    {
      id: 3,
      text: 'Learn React',
      isComplete: false,
    },
    {
      id: 4,
      text: 'Study with FlipAgain',
      isComplete: false,
    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  function handleClickRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleClickToggleComplete(id) {
    setTodos(toggleComplete(id, todos))
    console.log('Running toggle handler...')
  }

  function handleClickMoveUp(id) {
    console.log('moving up')
  }

  function handleClickMoveDown(id) {
    console.log('in moving down handler')
  }

  return (
    <div>
      <ToDoInput />
      <ToDoTable
        todos={todos}
        handleClickRemove={handleClickRemove}
        handleClickToggleComplete={handleClickToggleComplete}
        handleClickMoveUp={handleClickMoveUp}
        handleClickMoveDown={handleClickMoveDown}
      />
    </div>
  )
}

export default ToDoApp
