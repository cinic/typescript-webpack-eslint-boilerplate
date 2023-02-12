import {AboutPage} from '@pages/about'
import {MainPage} from '@pages/main'
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
}
