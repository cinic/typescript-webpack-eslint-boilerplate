import {i18next, initReactI18next} from '../lib/i18n'

i18next.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  resources: {ru: {translations: {}}},
})
export default i18next
