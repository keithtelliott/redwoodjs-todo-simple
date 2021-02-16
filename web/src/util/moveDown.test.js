import moveDown from './moveDown'
import defaultToDos from './defaultToDos'

const ID_TODO_IN_THE_MIDDLE = 2
const ID_TODO_THAT_DOES_NOT_EXIST = -1
const ID_TODO_AT_POSITION_LAST = 4
const INDEX_AFTER_MOVING_DOWN = 2

describe('moveDown', () => {
  it('handles the happy path - it moves a toDo down one', () => {
    const updatedToDos = moveDown(ID_TODO_IN_THE_MIDDLE, defaultToDos)
    expect(updatedToDos[INDEX_AFTER_MOVING_DOWN].id).toBe(ID_TODO_IN_THE_MIDDLE)
  })

  it('throws an error if the id does not exist', () => {
    expect(() => moveDown(ID_TODO_THAT_DOES_NOT_EXIST, defaultToDos)).toThrow(
      'was not found'
    )
  })

  it('throws an error if the toDo is already at the last position', () => {
    expect(() => moveDown(ID_TODO_AT_POSITION_LAST, defaultToDos)).toThrow(
      'already at the end'
    )
  })

  it('throws an error if we do not pass in the required arguments', () => {
    expect(() => moveDown(defaultToDos)).toThrow('undefined')
    expect(() => moveDown(ID_TODO_IN_THE_MIDDLE, -1)).toThrowError(
      'must be an array'
    )
  })
})
