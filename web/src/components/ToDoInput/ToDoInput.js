import { useState } from 'react'

const ToDoInput = ({ handleClickSaveNewToDo }) => {
  const [newToDoText, setNewToDoText] = useState('A New ToDo!')
  return (
    <div className="todo-child">
      Add a ToDo:{' '}
      <input
        type="text"
        value={newToDoText}
        onChange={() => setNewToDoText(event.target.value)}
      />
      <button
        disabled={!newToDoText}
        onClick={() => handleClickSaveNewToDo(newToDoText)}
      >
        Save
      </button>
    </div>
  )
}

export default ToDoInput
