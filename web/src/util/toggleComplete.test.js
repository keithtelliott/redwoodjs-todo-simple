import toggleComplete from './toggleComplete'
import defaultToDos from './defaultToDos'

describe('toggleComplete', () => {
  it('updates a toDo successfully', () => {
    console.log('Here are the default ToDos...', defaultToDos)
    const updatedToDos = toggleComplete(1, defaultToDos)
    expect(Array.isArray(updatedToDos)).toBe(true)
    console.log('Here are the updated ToDos...', updatedToDos)
  })
})
