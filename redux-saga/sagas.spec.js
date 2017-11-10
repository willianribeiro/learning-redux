import test from 'tape'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'
import { incrementAsync } from './sagas'

test('incrementAsync saga test', assert => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'should call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'should dispatch an INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'should be done'
  )

  assert.end()
})
