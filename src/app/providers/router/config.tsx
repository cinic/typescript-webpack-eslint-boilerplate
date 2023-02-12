import type {RouteProps} from '@shared/lib/router'
import {AppRoutes, RoutePath} from '@shared/config/router-config'
import {MainPage} from '@pages/main'
import {AboutPage} from '@pages/about'

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
}
