import { render } from '@redwoodjs/testing'

import ToDoTableRow from './ToDoTableRow'

describe('ToDoTableRow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoTableRow />)
    }).not.toThrow()
  })
})
