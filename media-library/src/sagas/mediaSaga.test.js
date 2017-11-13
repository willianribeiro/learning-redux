import { call, put } from 'redux-saga/effects'
import { shutterStockVideos, flickrImages } from '../api/api'
import { searchMediaSaga } from './mediaSaga'

describe('mediaSaga', () => {
  const payload = 'test'
  const generator = searchMediaSaga({ payload })

  it('should call shutterStockVideos API', () => {
    const expected = call(shutterStockVideos, payload)
    const obtained = generator.next(payload).value
    expect(obtained).toEqual(expected)
  })

  it('should call flickrImages API', () => {
    const expected = call(flickrImages, payload)
    const obtained = generator.next(payload).value
    expect(obtained).toEqual(expected)
  })

  it('should yield an array of objects', () => {
    const videos = []
    const expected = 4
    const obtained = generator.next(videos).value
    expect(obtained.length).toEqual(expected)
  })

  it('should dispatch failure effect', () => {
    const error = 'error';
    const expected = generator.throw(error).value
    const obtained = put({ type: 'SEARCH_MEDIA_ERROR', error })
    expect(expected).toEqual(obtained);
  });
})
