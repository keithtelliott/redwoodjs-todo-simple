import { useState } from 'react'

const ToDoInput = ({ handleClickSaveNewToDo }) => {
  const [newToDoText, setNewToDoText] = useState('A New ToDo!')

  function onClickSave() {
    handleClickSaveNewToDo(newToDoText)
    setNewToDoText('')
  }
  return (
    <div className="todo-child">
      Add a ToDo:{' '}
      <input
        type="text"
        value={newToDoText}
        onChange={() => setNewToDoText(event.target.value)}
      />
      <button disabled={!newToDoText} onClick={onClickSave}>
        Save
      </button>
    </div>
  )
}

export default ToDoInput
