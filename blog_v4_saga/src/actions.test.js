import axios from 'axios'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { fetch_users, api } from './actions'

describe('fetch_users', () => {
  const generator = fetch_users()

  it('should call api', () => {
    const expected = call(api)
    const obtained = generator.next().value
    expect(obtained).toEqual(expected)
  })
})


// test('incrementAsync saga test', assert => {
//   const gen = incrementAsync()

//   assert.deepEqual(
//     gen.next().value,
//     call(delay, 1000),
//     'should call delay(1000)'
//   )

//   assert.deepEqual(
//     gen.next().value,
//     put({ type: 'INCREMENT' }),
//     'should dispatch an INCREMENT action'
//   )

//   assert.deepEqual(
//     gen.next(),
//     { done: true, value: undefined },
//     'should be done'
//   )

//   assert.end()
// })
