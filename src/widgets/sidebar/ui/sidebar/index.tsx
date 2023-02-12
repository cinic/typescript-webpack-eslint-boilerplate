import {ChangeTranslation} from '@features/change-translation'
import {ToggleTheme} from '@features/toggle-theme'
import {classNames} from '@shared/lib/class-names'
import {useTranslation} from '@shared/lib/i18n'
import {useUnit} from '@shared/lib/state'
import {Button} from '@shared/ui/button'
import * as model from './model'
import styles from './styles.css'

export const Sidebar = ({className = ''}: {className?: string}) => {
  const {sidebarVisibility} = useUnit({sidebarVisibility: model.$sidebarVisibility})
  const {t} = useTranslation()

  return (
    <div className={classNames([styles.sidebar, className])} data-visibility={sidebarVisibility}>
      <Button
        onClick={() =>
          model.toggleVisibility(sidebarVisibility === 'collapsed' ? 'visible' : 'collapsed')
        }
      >
        {t('toggle')}
      </Button>
      <div className={styles.switchers}>
        <ToggleTheme />
        <ChangeTranslation />
      </div>
    </div>
  )
}
