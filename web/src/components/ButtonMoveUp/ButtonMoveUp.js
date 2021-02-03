const ButtonMoveUp = ({ id, itemIndex, handleClick }) => {
  return (
    <button disabled={itemIndex === 0} onClick={() => handleClick(id)}>
      Move Up
    </button>
  )
}

export default ButtonMoveUp
