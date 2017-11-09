import {
  selectSubreddit,
  invalidateSubreddit,
  requestPosts,
  receivePosts,
  fetchPosts,
  fetchPostsIfNeeded,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from './actions'

// Test action creators
describe('action creators', () => {
  it('should create an action to select subreddit', () => {
    const subreddit = 'reactjs'
    const expectedAction = {
      type: SELECT_SUBREDDIT,
      subreddit: subreddit
    }

    expect(selectSubreddit(subreddit)).toEqual(expectedAction)
  })

  it('should create an action to invalidate subreddit', () => {
    const subreddit = 'reactjs'
    const expectedAction = {
      type: INVALIDATE_SUBREDDIT,
      subreddit: subreddit
    }

    expect(invalidateSubreddit(subreddit)).toEqual(expectedAction)
  })

  it('should create an action to request posts', () => {
    const subreddit = 'reactjs'
    const expectedAction = {
      type: REQUEST_POSTS,
      subreddit: subreddit
    }

    expect(requestPosts(subreddit)).toEqual(expectedAction)
  })
})
