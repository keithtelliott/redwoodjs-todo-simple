import { render } from '@redwoodjs/testing'

import ToDoButtonEdit from './ButtonEdit'

describe('ToDoButtonEdit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoButtonEdit />)
    }).not.toThrow()
  })
})
