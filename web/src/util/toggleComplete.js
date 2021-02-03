import * as R from 'ramda'

function toggleComplete(id, toDos) {
  const origToDo = R.find(R.propEq('id', id), toDos)
  const updatedTodo = { ...origToDo, isComplete: !origToDo.isComplete }
  const origToDoIndex = R.findIndex(R.propEq('id', id), toDos)
  return R.update(origToDoIndex, updatedTodo, toDos)
}

export default toggleComplete
