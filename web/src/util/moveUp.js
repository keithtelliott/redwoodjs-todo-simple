import * as R from 'ramda'

/**
 * Returns a new copy of the todos array.  The position of the toDo identified
 * by the provided id will be moved up (the index will be reduced by one).
 *
 * @param {Number} id The id of the toDo that will be updated
 * @param {Array} toDos The original toDos array
 */
function moveUp(id, toDos) {
  if (id === undefined)
    throw new TypeError('id must be provided.  It is undefined.')

  if (toDos === undefined)
    throw new TypeError('toDos must be provided.  It is undefined.')

  if (!Array.isArray(toDos))
    throw new TypeError(
      'toDos must be an array.  The following value was provided:  ',
      toDos
    )

  const origToDoIndex = R.findIndex(R.propEq('id', id), toDos)

  if (origToDoIndex === -1)
    throw new Error(
      'A ToDo with the id of ',
      id,
      ' was not found.  A valid id must be provided.'
    )

  if (origToDoIndex === 0)
    throw new Error(
      'The ToDo with an id of ',
      id,
      ' cannot move up because it is already at the beginning of the list.'
    )

  return R.move(origToDoIndex, origToDoIndex - 1, toDos)
}

export default moveUp
