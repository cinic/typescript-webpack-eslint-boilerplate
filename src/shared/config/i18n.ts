import {i18next, i18nextBackend, i18nextLanguageDetector, initReactI18next} from '../lib/i18n'

export default i18next
  .use(i18nextBackend)
  .use(i18nextLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },
  })
