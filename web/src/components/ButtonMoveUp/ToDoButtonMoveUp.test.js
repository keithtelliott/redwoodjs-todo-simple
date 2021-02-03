import { render } from '@redwoodjs/testing'

import ToDoButtonMoveUp from './ButtonMoveUp'

describe('ToDoButtonMoveUp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoButtonMoveUp />)
    }).not.toThrow()
  })
})
