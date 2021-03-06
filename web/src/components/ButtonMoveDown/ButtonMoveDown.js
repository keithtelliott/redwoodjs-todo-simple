const ButtonMoveDown = ({ id, itemIndex, todoListLength, handleClick }) => {
  return (
    <button
      disabled={itemIndex === todoListLength - 1}
      onClick={() => handleClick(id)}
    >
      Move Down
    </button>
  )
}

export default ButtonMoveDown
