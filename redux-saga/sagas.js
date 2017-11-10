import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

// saga worker
export function* helloSaga() {
  console.log('Hello Sagas')
}

// saga worker
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT'})
}

// saga watcher
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}