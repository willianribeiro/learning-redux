export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = (subreddit, response) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: response.data.children.map(child => child.data),
  receivedAt: Date.now()
})