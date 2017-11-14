import React from 'react';
import * as actions from '../actions'

const App = () => (
  <div>
    <button type="button" onClick={actions.fetch_users_if_needed}>Fetch</button>
    <button type="button" onClick={actions.invalidate_users}>Invalidate</button>
  </div>
)


export default App;
