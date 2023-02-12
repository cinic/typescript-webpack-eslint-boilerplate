import {Suspense} from 'react'
import {useTranslation} from '@shared/lib/i18n'
import {Route, Routes} from '@shared/lib/router'
import {routerConfig} from '../config'

export const AppRouter = () => {
  const {t} = useTranslation()
  return (
    <Suspense fallback={<div>{t('loading')}</div>}>
      <Routes>
        {Object.values(routerConfig).map(({element, path}) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
