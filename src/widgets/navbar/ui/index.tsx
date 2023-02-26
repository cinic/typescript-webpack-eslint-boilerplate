import {RoutePath} from '@shared/config/router-config'
import {classNames} from '@shared/lib/class-names'
import {AppLink} from '@shared/ui/app-link'
import styles from './styles.css'

export const Navbar = ({className = ''}: {className?: string}) => {
  return (
    <div className={classNames([styles.navbar, className])}>
      <nav className={styles.links}>
        <AppLink to={RoutePath.main}>/</AppLink>
      </nav>
    </div>
  )
}
