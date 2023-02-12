import {AboutPage} from '@pages/about'
import {MainPage} from '@pages/main'
import {NotFoundPage} from '@pages/not-found'
import {AppRoutes, RoutePath} from '@shared/config/router-config'
import type {RouteProps} from '@shared/lib/router'

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
}
