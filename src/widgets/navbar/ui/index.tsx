import {AuthDialog, ToggleAuthDialogButton} from '@features/auth-by-username'
import {classNames} from '@shared/lib/class-names'
import styles from './styles.css'

export const Navbar = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.navbar, className])}>
      <nav className={styles.links}>
        <ToggleAuthDialogButton />
      </nav>
      <AuthDialog />
    </div>
  )
}
