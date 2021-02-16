import getNextId from './getNextId'
import defaultToDos from './defaultToDos'

const NEXT_ID = 5
const NOT_AN_ARRAY = -1

describe('getNextId', () => {
  it('handles the happy path - it returns the next Id', () => {
    const nextId = getNextId(defaultToDos)
    expect(nextId).toBe(NEXT_ID)
  })

  it('throws an error if we do not pass in the required arguments', () => {
    expect(() => getNextId()).toThrow('must be provided')
    expect(() => getNextId(NOT_AN_ARRAY)).toThrowError('must be an array')
  })
})
