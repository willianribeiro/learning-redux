import axios from 'axios'
import store from './configureStore'
import * as actionCreator from './actionCreators.js'

// "ACTIONS"
export const fetch_users = () => {
  store.dispatch(actionCreator.fetch_users_pending())

  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      store.dispatch(actionCreator.fetch_users_success(response.data))
    })
    .catch(error => {
      store.dispatch(actionCreator.fetch_users_error(error))
    })
}

export const fetch_users_if_needed = () => {
  const users = store.getState().users

  if (_should_fetch_users(users)) {
    return fetch_users()
  } else {
    return Promise.resolve()
  }
}

export const invalidate_users = () => {
  store.dispatch(actionCreator.invalidate_users())
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