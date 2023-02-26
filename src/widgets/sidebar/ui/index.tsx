import {useTranslation} from 'react-i18next'
import {ChangeTranslation} from '@features/change-translation'
import {ToggleTheme} from '@features/toggle-theme'
import {RoutePath} from '@shared/config/router-config'
import {classNames} from '@shared/lib/class-names'
import {useUnit} from '@shared/lib/state'
import {AppLink} from '@shared/ui/app-link'
import {ButtonIcon} from '@shared/ui/button'
import {ArrowLeft, ArrowRight, Document, Home} from '@shared/ui/icons'
import * as model from './model'
import styles from './styles.css'

export const Sidebar = ({className = ''}: {className?: string}) => {
  const {sidebarVisibility} = useUnit({sidebarVisibility: model.$sidebarVisibility})
  const {t} = useTranslation()

  return (
    <div
      data-testid="sidebar"
      className={classNames([styles.sidebar, className])}
      data-visibility={sidebarVisibility}
    >
      <nav className={styles.nav}>
        <AppLink to={RoutePath.main} className={styles.navItem}>
          <Home />
          <span>{t('menu.main')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} className={styles.navItem}>
          <Document />
          <span>{t('menu.about')}</span>
        </AppLink>
      </nav>
      <ButtonIcon
        className={styles.collapseControl}
        data-testid="sidebar-toggle-button"
        onClick={() =>
          model.toggleVisibility(sidebarVisibility === 'collapsed' ? 'visible' : 'collapsed')
        }
      >
        {sidebarVisibility === 'collapsed' ? <ArrowRight /> : <ArrowLeft />}
      </ButtonIcon>
      <div className={styles.switchers}>
        <ToggleTheme />
        <ChangeTranslation className={styles.changeTranslation} />
      </div>
    </div>
  )
}
