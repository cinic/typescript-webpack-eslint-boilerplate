import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {Button} from '@shared/ui/button'
import styles from './styles.css'

export const PageError = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()

  return (
    <div className={classNames([styles.page, className])}>
      <p>{t('pageError')}</p>
      <Button onClick={() => location.reload()}>{t('reloadPage')}</Button>
    </div>
  )
}
