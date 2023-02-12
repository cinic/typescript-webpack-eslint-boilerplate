import {Route, Routes} from '@shared/lib/router'
import {Suspense} from 'react'
import {routerConfig} from '../config'

export const AppRouter = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Routes>
      {Object.values(routerConfig).map(({element, path}) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </Suspense>
)
