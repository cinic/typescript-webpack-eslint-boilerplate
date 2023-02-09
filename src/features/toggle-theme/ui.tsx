import {toggleTheme, $theme} from './model'
import {useUnit} from '@lib/state'

export const ToggleTheme = () => {
  const theme = useUnit($theme)

  return (
    <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>Сменить тему</button>
  )
}
