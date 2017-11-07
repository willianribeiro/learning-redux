import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPostsIfNeeded } from './actions';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(selectSubreddit('frontend'))
store.dispatch(fetchPostsIfNeeded('frontend'))
store.dispatch(fetchPostsIfNeeded('frontend'))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
