import {useTranslation} from '@shared/lib/i18n'
import {useUnit} from '@shared/lib/state'
import {ButtonIcon} from '@shared/ui/button'
import * as model from './model'
// import styles from './styles.css'

export const ChangeTranslation = ({className = ''}: {className?: string}) => {
  const lang = useUnit(model.$lang)
  const {t} = useTranslation()

  return (
    <ButtonIcon
      className={className}
      onClick={() => model.changeLanguage(lang === 'ru' ? 'en' : 'ru')}
    >
      {t('lang')}
    </ButtonIcon>
  )
}
