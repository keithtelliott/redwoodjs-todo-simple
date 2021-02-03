const ButtonToggleComplete = ({ id, handleClick }) => {
  return <button onClick={() => handleClick(id)}>Toggle Done</button>
}

export default ButtonToggleComplete
