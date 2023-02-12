import {createEvent, restore, createEffect, sample} from '@shared/lib/state'

type Theme = 'light' | 'dark'
const LOCAL_STORAGE_THEME_KEY = 'theme'

const loadDefaultTheme = createEvent()
export const toggleTheme = createEvent<Theme>()

const loadDefaultThemeFx = createEffect(() => {
  const systemTheme = matchMedia('(prefers-color-scheme: dark)')
  const systemThemeName: Theme = systemTheme.matches ? 'dark' : 'light'
  const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || systemThemeName

  systemTheme.addEventListener('change', (event) =>
    event.matches ? toggleTheme('dark') : toggleTheme('light'),
  )

  return defaultTheme
})
const toggleThemeFx = createEffect((theme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  document.documentElement.setAttribute('data-theme', theme)
})

export const $theme = restore(toggleTheme, 'light')

sample({
  clock: loadDefaultTheme,
  target: loadDefaultThemeFx,
})

sample({
  clock: loadDefaultThemeFx.doneData,
  target: toggleTheme,
})

sample({
  clock: toggleTheme,
  target: toggleThemeFx,
})

loadDefaultTheme()
