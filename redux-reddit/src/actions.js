import fetch from 'isomorphic-fetch'

// ACTION TYPES
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// ACTION CREATORS
export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, response) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: response.data.children.map(child => child.data),
  receivedAt: Date.now()
})

// THUNKS
export const fetchPosts = subreddit => {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

export const fetchPostsIfNeeded = subreddit => {
  return (dispatch, getState) => {
    if (_shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    } else {
      return Promise.resolve()
    }
  }
}

// PRIVATE FUNCTION
function _shouldFetchPosts (state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}
