import axios from 'axios'
import * as actionCreator from './actionCreators.js'

// "ACTIONS"
export const fetch_users = dispatch => {
  dispatch(actionCreator.fetch_users_pending())

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch(actionCreator.fetch_users_success(response.data))
    })
    .catch(error => {
      dispatch(actionCreator.fetch_users_error(error))
    })
}

export const fetch_users_if_needed = (users, dispatch) => {
  if (_should_fetch_users(users)) {
    fetch_users(dispatch)
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