import React from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import * as actions from '../actions'

const App = props => (
  <div>
    <button type="button" onClick={() => { actions.fetch_users_if_needed(props.users, props.dispatch) }}>Fetch</button>
    <button type="button" onClick={() => { actions.invalidate_users(props.dispatch) }}>Invalidate</button>
    <UserList users={props.users.items} />
  </div>
)

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(App);
