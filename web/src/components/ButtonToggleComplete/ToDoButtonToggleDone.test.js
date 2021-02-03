import { render } from '@redwoodjs/testing'

import ToDoButtonToggleDone from './ButtonToggleComplete'

describe('ToDoButtonToggleDone', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoButtonToggleDone />)
    }).not.toThrow()
  })
})
