import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { fetch_users_watcher } from './actions'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware
  )
)

sagaMiddleware.run(fetch_users_watcher)

export default store