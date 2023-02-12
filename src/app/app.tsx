import styles from '@shared/styles/styles.css'
import {BrowserRouter, NavLink} from '@shared/lib/router'
import {ToggleTheme} from '@features/toggle-theme'
import {AppRouter} from './providers/router'

export const Application = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <ToggleTheme />
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}
