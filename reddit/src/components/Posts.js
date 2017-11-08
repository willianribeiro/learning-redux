import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
  render() {
    return (
      <ul style={{fontSize: '18px', lineHeight: '1.5', maxWidth: '900px'}}>
        {this.props.posts.map((post, i) => <li key={i} style={{ marginBottom: '8px'}}>{post.title}</li>)}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
