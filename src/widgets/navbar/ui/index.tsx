import {AppLink} from '@shared/ui/app-link'
import styles from './styles.css'
import {classNames} from '@shared/lib/class-names'

export const Navbar = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.navbar, className])}>
      <nav className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </nav>
    </div>
  )
}
