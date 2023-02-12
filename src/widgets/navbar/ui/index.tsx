import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {AppLink} from '@shared/ui/app-link'
import styles from './styles.css'

export const Navbar = ({className = ''}: {className?: string}) => {
  const {t} = useTranslation()

  return (
    <div className={classNames([styles.navbar, className])}>
      <nav className={styles.links}>
        <AppLink to="/">{t('menu.main')}</AppLink>
        <AppLink to="/about">{t('menu.about')}</AppLink>
      </nav>
    </div>
  )
}
