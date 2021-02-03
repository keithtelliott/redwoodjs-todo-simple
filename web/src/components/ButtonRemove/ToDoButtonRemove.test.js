import { render } from '@redwoodjs/testing'

import ToDoButtonRemove from './ButtonRemove'

describe('ToDoButtonRemove', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoButtonRemove />)
    }).not.toThrow()
  })
})
