import { render } from '@redwoodjs/testing'

import ToDoButtonMoveDown from './ButtonMoveDown'

describe('ToDoButtonMoveDown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoButtonMoveDown />)
    }).not.toThrow()
  })
})
