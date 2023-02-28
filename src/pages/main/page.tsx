import {Counter} from '@entities/counter'
import {useTranslation} from '@shared/lib/i18n'

export const MainPage = () => {
  const {t} = useTranslation('main')

  return (
    <div>
      {t('title')}
      <Counter />
    </div>
  )
}

// Только для отложенной загрузки и использвании в роутинге
export default MainPage
