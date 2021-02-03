const ButtonRemove = ({ id, handleClick }) => {
  return <button onClick={() => handleClick(id)}>Remove</button>
}

export default ButtonRemove
