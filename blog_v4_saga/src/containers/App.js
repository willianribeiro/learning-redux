import React from 'react';
import { connect } from 'react-redux'
import UserList from '../components/UserList'
import * as actionCreator from '../actionCreators'

const App = props => (
  <div>
    <button type="button" onClick={() => props.dispatch(actionCreator.fetch_users())}>Fetch</button>
    {/* <button type="button" onClick={() => props.dispatch(actions.invalidate_users())}>Invalidate</button> */}
    <UserList users={props.users.items} />
  </div>
)

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(App);
