import {useEffect, useState} from 'react'
import {toggleThemeModel} from '@features/toggle-theme'
import {$theme} from '@features/toggle-theme/model'
import {useUnit} from '@shared/lib/state'
import type {DecoratorFn} from '@storybook/react'
import styles from '../../styles/app.css'
export const ThemeDecorator: DecoratorFn = (StoryFn, context) => {
  const [theme, setTh] = useState(context.parameters.theme || context.globals.theme)
  const localTheme = useUnit($theme)

  useEffect(() => {
    setTh(localTheme)
  }, [localTheme])

  useEffect(() => {
    setTh(context.parameters.theme || context.globals.theme)
    toggleThemeModel.toggleTheme(context.parameters.theme || context.globals.theme)
  }, [context.parameters.theme, context.globals.theme])

  const storyTheme: toggleThemeModel.Theme = theme === 'dark' ? 'dark' : 'light'

  return (
    <div className={styles.app} data-theme={storyTheme}>
      <StoryFn />
    </div>
  )
}
