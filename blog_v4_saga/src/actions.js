import axios from 'axios'
import * as actionCreator from './actionCreators.js'
import { put, call, takeEvery } from 'redux-saga/effects'
import * as types from './actionTypes'

// Api service
export function api() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

// SAGA (WORKER)
export function* fetch_users() {
  try {
    const users = yield call(api)
    yield put(actionCreator.fetch_users_success(users.data))
  } catch (error) {
    yield put(actionCreator.fetch_users_error(error))
  }
}

// SAGA (WATCHER)
export function* fetch_users_watcher() {
  yield takeEvery(types.FETCH_USERS, fetch_users);
  // yield takeLatest(types.FETCH_USERS, fetch_users);
}







// export const fetch_users = () => {
//   return (dispatch, getState) => {
//     dispatch(actionCreator.fetch_users_pending())

//     return axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         return dispatch(actionCreator.fetch_users_success(response.data))
//       })
//       .catch(error => {
//         return dispatch(actionCreator.fetch_users_error(error))
//       })
//   }
// }

// export const fetch_users_if_needed = () => {
//   return (dispatch, getState) => {
//     const users = getState().users

//     if (_should_fetch_users(users)) {
//       return dispatch(fetch_users())
//     } else {
//       return Promise.resolve()
//     }
//   }
// }

// export const invalidate_users = () => {
//   return (dispatch, getState) => {
//     dispatch(actionCreator.invalidate_users())
//   }
// }

// PRIVATE FUNCTIONS
// function _should_fetch_users(users) {
//   if (users.fetching) {
//     return false
//   } else if (users.items.length === 0) {
//     return true
//   } else {
//     return users.didInvalidate
//   }
// }
