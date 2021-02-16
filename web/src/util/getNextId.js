import * as R from 'ramda'

const ID_INCREMENT = 1
/**
 * Returns the next ID to use for a new toDo.
 *
 * @param {Array} toDos The original toDos array
 */
function getNextId(toDos) {
  if (toDos === undefined)
    throw new TypeError('toDos must be provided.  It is undefined.')

  if (!Array.isArray(toDos))
    throw new TypeError(
      'toDos must be an array.  The following value was provided:  ' + toDos
    )

  return (
    R.compose(R.prop('id'), R.reduce(R.maxBy(R.prop('id')), { id: 0 }))(toDos) +
    ID_INCREMENT
  )
}

export default getNextId
