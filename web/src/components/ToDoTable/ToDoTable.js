import ToDoTableRow from '../ToDoTableRow/ToDoTableRow'

const ToDoTable = ({
  todos,
  handleClickRemove,
  handleClickToggleComplete,
  handleClickMoveUp,
  handleClickMoveDown,
}) => {
  if (todos === null || !Array.isArray(todos)) return null

  return (
    <div className="todo-child">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {
              <ToDoTableRow
                todo={todo}
                itemIndex={index}
                todoListLength={todos.length}
                handleClickRemove={handleClickRemove}
                handleClickToggleComplete={handleClickToggleComplete}
                handleClickMoveUp={handleClickMoveUp}
                handleClickMoveDown={handleClickMoveDown}
              />
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoTable
