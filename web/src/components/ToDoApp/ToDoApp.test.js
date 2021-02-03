import { render } from '@redwoodjs/testing'

import ToDoApp from './ToDoApp'

describe('ToDoApp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoApp />)
    }).not.toThrow()
  })
})
