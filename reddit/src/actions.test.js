import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
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

// Mock store
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Sync actions', () => {
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

describe('Async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should dispatch RECEIVE_POSTS after fetchPosts() has been done', () => {
    fetchMock.get(
      '*',
      {
        body: {
          data: {
            children: [
              { data: { subreddit: 'reactjs', title: "Most Promising IoT trends for 2018" } },
              { data: { subreddit: 'reactjs', title: "JSON and its real world use" } }
            ]
          }
        },
        headers: { 'content-type': 'application/json' }
      }
    )

    const subreddit = 'reactjs';
    const expectedActions = [
      { type: REQUEST_POSTS, subreddit: subreddit },
      {
        type: RECEIVE_POSTS,
        subreddit: subreddit,
        posts: [
          { subreddit: subreddit, title: "Most Promising IoT trends for 2018" },
          { subreddit: subreddit, title: "JSON and its real world use" }
        ]
      }
    ]

    const store = mockStore({ posts: [] })
    return store.dispatch(fetchPosts(subreddit))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})