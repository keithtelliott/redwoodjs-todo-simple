import { render } from '@redwoodjs/testing'

import ToDoInput from './ToDoInput'

describe('ToDoInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToDoInput />)
    }).not.toThrow()
  })
})
