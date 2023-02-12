import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import styles from './styles.css'

export const NotFoundPage = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()
  return <div className={classNames([styles.page, className])}>{t('notFound')}</div>
}
