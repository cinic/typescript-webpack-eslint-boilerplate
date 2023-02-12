import {Suspense} from 'react'
import {Route, Routes} from '@shared/lib/router'
import {PageLoader} from '@widgets/page-loader'
import {routerConfig} from '../config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig).map(({element, path}) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
