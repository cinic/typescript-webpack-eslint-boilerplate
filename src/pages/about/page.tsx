import {useTranslation} from '@shared/lib/i18n'

export const AboutPage = () => {
  const {t} = useTranslation('about')

  return <div>{t('title')}</div>
}

// Только для отложенной загрузки и использвании в роутинге
export default AboutPage
