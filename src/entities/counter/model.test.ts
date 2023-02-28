import {allSettled, fork} from '@shared/lib/state'
import * as counterModel from './model'

// В данном случае тест изибыточен
describe('Counter.model', () => {
  test('Increment with scope', async () => {
    const scope = fork()

    await allSettled(counterModel.increment, {
      scope,
    })

    expect(scope.getState(counterModel.$counter)).toEqual(1)
  })
})
