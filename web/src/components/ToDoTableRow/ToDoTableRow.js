const { default: ButtonEdit } = require('../ButtonEdit/ButtonEdit')
const { default: ButtonMoveDown } = require('../ButtonMoveDown/ButtonMoveDown')
const { default: ButtonMoveUp } = require('../ButtonMoveUp/ButtonMoveUp')
const { default: ButtonRemove } = require('../ButtonRemove/ButtonRemove')
const {
  default: ButtonToggleComplete,
} = require('../ButtonToggleComplete/ButtonToggleComplete')

const ToDoTableRow = ({
  todo,
  itemIndex,
  todoListLength,
  handleClickRemove,
  handleClickToggleComplete,
  handleClickMoveUp,
  handleClickMoveDown,
}) => {
  return (
    <div>
      {todo.text},{todo.isComplete ? '***DONE***' : ''}
      <ButtonToggleComplete
        id={todo.id}
        handleClick={handleClickToggleComplete}
      />
      ,
      <ButtonMoveUp
        id={todo.id}
        itemIndex={itemIndex}
        handleClick={handleClickMoveUp}
      />
      ,
      <ButtonMoveDown
        id={todo.id}
        itemIndex={itemIndex}
        todoListLength={todoListLength}
        handleClick={handleClickMoveDown}
      />
      ,
      <ButtonRemove id={todo.id} handleClick={handleClickRemove} />,
      <ButtonEdit id={todo.id} />
    </div>
  )
}

export default ToDoTableRow
