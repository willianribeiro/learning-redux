import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ users }) => (
  <ul>
    { users.map(user => <li key={user.id}>{user.name}</li>) }
  </ul>
)

UserList.propTypes = {
  users: PropTypes.array
}

export default UserList