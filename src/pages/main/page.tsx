import {Counter} from '@entities/counter'
import {useTranslation} from '@shared/lib/i18n'
import {FieldText} from '@shared/ui/field-text'

export const MainPage = () => {
  const {t} = useTranslation('main')

  return (
    <div>
      {t('title')}
      <Counter />
      <FieldText autoFocus placeholder="Olo" />
    </div>
  )
}

// Только для отложенной загрузки и использвании в роутинге
export default MainPage
