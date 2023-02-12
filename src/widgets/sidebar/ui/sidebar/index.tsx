import {classNames} from '@shared/lib/class-names'
import {useUnit} from '@shared/lib/state'
import * as model from './model'
import styles from './styles.css'
import {Button} from '@shared/ui/button'
import {ToggleTheme} from '@features/toggle-theme'

export const Sidebar = ({className = ''}: {className?: string}) => {
  const {sidebarVisibility} = useUnit({sidebarVisibility: model.$sidebarVisibility})

  return (
    <div className={classNames([styles.sidebar, className])} data-visibility={sidebarVisibility}>
      <Button
        onClick={() =>
          model.toggleVisibility(sidebarVisibility === 'collapsed' ? 'visible' : 'collapsed')
        }
      >
        toggle
      </Button>
      <div className={styles.switchers}>
        <ToggleTheme />
      </div>
    </div>
  )
}
