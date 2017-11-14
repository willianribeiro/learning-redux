import * as types from './actionTypes'

// ACTION CREATORS
export const fetch_users = () => ({
  type: types.FETCH_USERS
})

export const fetch_users_pending = () => ({
  type: types.FETCH_USERS_PENDING
})

export const fetch_users_success = payload => ({
  type: types.FETCH_USERS_SUCCESS,
  users: payload
})

export const fetch_users_error = payload => ({
  type: types.FETCH_USERS_ERROR,
  error: payload
})

export const invalidate_users = () => ({
  type: types.INVALIDATE_USERS,
})
