import {AppLink} from '@shared/ui/app-link'
import styles from './styles.css'
import {classNames} from '@shared/lib/class-names'
import {ToggleTheme} from '@features/toggle-theme'

export const Navbar = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.navbar, className])}>
      <ToggleTheme />
      <nav className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </nav>
    </div>
  )
}
