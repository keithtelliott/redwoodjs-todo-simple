import * as R from 'ramda'

/**
 * Returns a new copy of the todos array.  The "complete" status of the toDo identified
 * by the provided id will be toggled (from false to true, or vise versa).
 *
 * @param {Number} id The id of the toDo that will be updated
 * @param {Array} toDos The original toDos array 
 */
function toggleComplete(id, toDos) {
  const origToDo = R.find(R.propEq('id', id), toDos)
  const updatedTodo = { ...origToDo, isComplete: !origToDo.isComplete }
  const origToDoIndex = R.findIndex(R.propEq('id', id), toDos)
  return R.update(origToDoIndex, updatedTodo, toDos)
}

export default toggleComplete
