import {i18next} from '@shared/lib/i18n'
import {restore, createEvent, createEffect, sample} from '@shared/lib/state'

export const changeLanguage = createEvent<string>()

const changeLanguageFx = createEffect((lang: string) => {
  i18next.changeLanguage(lang)
})

export const $lang = restore(changeLanguage, 'ru')

sample({
  clock: changeLanguage,
  target: changeLanguageFx,
})
