import { type RouteProps } from 'react-router-dom';
import {
  getRouteAuth,
  getRouteMain,
  getRouteNews,
  getRouteProfile,
} from '@/app/providers/Router/config/routes';

import { NewsPage } from '@/pages/NewsPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AuthenticationPage } from '@/pages/AuthenticationPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  NEWS = 'news',
  AUTH = 'auth',
  // last
  NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.AUTH]: {
    path: getRouteAuth(),
    element: <AuthenticationPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NEWS]: {
    path: getRouteNews(),
    element: <NewsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
