import { render } from '@redwoodjs/testing'

import ToDoTable from './ToDoTable'

describe('ToDoTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoTable />)
    }).not.toThrow()
  })
})
