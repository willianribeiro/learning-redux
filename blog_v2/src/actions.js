import axios from 'axios'
import * as actionCreator from './actionCreators.js'

// "ACTIONS"
export const fetch_users = dispatch => {
  dispatch(actionCreator.fetch_users_pending())

  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return dispatch(actionCreator.fetch_users_success(response.data))
    })
    .catch(error => {
      return dispatch(actionCreator.fetch_users_error(error))
    })
}

export const fetch_users_if_needed = (users, dispatch) => {
  if (_should_fetch_users(users)) {
    return fetch_users(dispatch)
  } else {
    return Promise.resolve()
  }
}

export const invalidate_users = dispatch => {
  dispatch(actionCreator.invalidate_users())
}

// PRIVATE FUNCTIONS
function _should_fetch_users(users) {
  if (users.fetching) {
    return false
  } else if (users.items.length === 0) {
    return true
  } else {
    return users.didInvalidate
  }
}