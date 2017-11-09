import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actions'

describe('actions', () => {
  it('should create an action to add todo', () => {
    const text = 'Finish tests'
    const expectedAction = {
      id: 0,
      type: ADD_TODO,
      text: text
    }

    expect(addTodo(text)).toEqual(expectedAction)
  })

  it('should create an action to toggle todo', () => {
    const index = 1
    const expectedAction = {
      type: TOGGLE_TODO,
      index: index
    }

    expect(toggleTodo(index)).toEqual(expectedAction)
  })

  it('should create an action to set visibility filter', () => {
    const filter = 'SHOW_ALL'
    const expectedAction = {
      type: SET_VISIBILITY_FILTER,
      filter: filter
    }

    expect(setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})