import {useUnit} from '@shared/lib/state'
import {ButtonIcon} from '@shared/ui/button'
import {Moon, Sun} from '@shared/ui/icons'
import {$theme, toggleTheme} from './model'
import styles from './styles.css'

export const ToggleTheme = () => {
  const theme = useUnit($theme)

  return (
    <ButtonIcon
      className={styles.themeSwitcher}
      type="button"
      role="switch"
      aria-label="toggle-theme"
      aria-checked={theme === 'dark'}
      data-theme={theme}
      onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className={styles.check}>
        <span className={styles.icon}>
          <Sun className={styles.sun} />
          <Moon className={styles.moon} />
        </span>
      </span>
    </ButtonIcon>
  )
}
