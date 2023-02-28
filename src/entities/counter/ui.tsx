import {useTranslation} from 'react-i18next'
import {useUnit} from '@shared/lib/state'
import {ButtonPrimary} from '@shared/ui/button'
import {$counter, decrement, increment} from './model'

export const Counter = () => {
  const {t} = useTranslation()
  const {counter} = useUnit({counter: $counter})
  const [decrementClicked, incrementClicked] = useUnit([decrement, increment])

  return (
    <div>
      <h1>{counter}</h1>
      <ButtonPrimary data-testid="decrement-btn" onClick={decrementClicked}>
        {t('decrement')}
      </ButtonPrimary>
      <ButtonPrimary data-testid="increment-btn" onClick={incrementClicked}>
        {t('increment')}
      </ButtonPrimary>
    </div>
  )
}
