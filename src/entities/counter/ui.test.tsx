import {renderComponent} from '@shared/lib/render-component'
import {fork, Provider} from '@shared/lib/state'
import {fireEvent, screen} from '@testing-library/react'
import {$counter} from './model'
import {Counter} from './ui'

describe('Counter.ui', () => {
  test('should increment counter after click', () => {
    const scope = fork({
      values: new Map([[$counter, 0]]),
    })

    renderComponent(
      <Provider value={scope}>
        <Counter />
      </Provider>,
    )

    fireEvent.click(screen.getByTestId('increment-btn'))

    expect(scope.getState($counter)).toEqual(1)
  })

  test('should decrement counter after click', () => {
    const scope = fork({
      values: new Map([[$counter, 0]]),
    })

    renderComponent(
      <Provider value={scope}>
        <Counter />
      </Provider>,
    )

    fireEvent.click(screen.getByTestId('decrement-btn'))

    expect(scope.getState($counter)).toEqual(-1)
  })
})
