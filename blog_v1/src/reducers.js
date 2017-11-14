import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  INVALIDATE_USERS
} from './actionTypes'

const initialState = {
  users: {
    items: [],
    fetching: false,
    didInvalidate: false,
    error: null
  }
}

const blogApp = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        users: {
          ...state.users,
          fetching: true
        }
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          items: action.users,
          fetching: false,
          didInvalidate: false
        }
      }

    case FETCH_USERS_ERROR:
      return {
        ...state,
        users: {
          ...state.users,
          error: action.error,
          fetching: false
        }
      }

    case INVALIDATE_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          didInvalidate: true
        }
      }

    default:
      return state
  }
}

export default blogApp