import moveUp from './moveUp'
import defaultToDos from './defaultToDos'

const ID_TODO_IN_THE_MIDDLE = 2
const ID_TODO_THAT_DOES_NOT_EXIST = -1
const ID_TODO_AT_POSITION_ZERO = 1

describe('moveUp', () => {
  it('handles the happy path - it moves a toDo up one', () => {
    const updatedToDos = moveUp(ID_TODO_IN_THE_MIDDLE, defaultToDos)
    expect(updatedToDos[0].id).toBe(ID_TODO_IN_THE_MIDDLE)
  })

  it('throws an error if the id does not exist', () => {
    expect(() => moveUp(ID_TODO_THAT_DOES_NOT_EXIST, defaultToDos)).toThrow()
  })

  it('throws an error if the toDo is already at position zero', () => {
    expect(() => moveUp(ID_TODO_AT_POSITION_ZERO, defaultToDos)).toThrow()
  })

  it('throws an error if we do not pass in the required arguments', () => {
    expect(() => moveUp(ID_TODO_AT_POSITION_ZERO)).toThrow()
    expect(() => moveUp(defaultToDos)).toThrow()
    expect(() => moveUp(ID_TODO_IN_THE_MIDDLE, -1)).toThrowError('array')
  })
})
