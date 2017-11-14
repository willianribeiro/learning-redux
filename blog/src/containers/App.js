import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

const App = props => (
  <div>
    <button type="button" onClick={actions.fetch_users_if_needed}>Fetch</button>
    <button type="button" onClick={actions.invalidate_users}>Invalidate</button>

    <ul>
      { props.users.items.map(user => <li key={user.id}>{user.name}</li>) }
    </ul>
  </div>
)

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(App);
