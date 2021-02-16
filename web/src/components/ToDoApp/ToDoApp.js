import ToDoInput from '../ToDoInput/ToDoInput'
import ToDoTable from '../ToDoTable/ToDoTable'
import { useState } from 'react'
import toggleComplete from '../../util/toggleComplete'
import moveUp from 'src/util/moveUp'
import getNextId from 'src/util/getNextId'
import defaultToDos from 'src/util/defaultToDos'
import moveDown from 'src/util/moveDown'

const ToDoApp = () => {
  const initialTodos = defaultToDos

  const [todos, setTodos] = useState(initialTodos)

  function handleClickRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleClickToggleComplete(id) {
    setTodos(toggleComplete(id, todos))
  }

  function handleClickMoveUp(id) {
    setTodos(moveUp(id, todos))
  }

  function handleClickMoveDown(id) {
    console.log('chmd here is id:  ' + id)
    setTodos(moveDown(id, todos))
  }

  function handleClickSaveNewToDo(newToDoText) {
    if (newToDoText === undefined || newToDoText === '') return

    setTodos([
      ...todos,
      { id: getNextId(todos), text: newToDoText, isComplete: false },
    ])
  }

  return (
    <div className="todo-container">
      <h1 className="todo-child">ToDos!</h1>
      <ToDoInput handleClickSaveNewToDo={handleClickSaveNewToDo} />
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
