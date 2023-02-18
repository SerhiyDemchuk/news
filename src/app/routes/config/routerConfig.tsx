import { type RouteProps } from 'react-router-dom';
import {
  getRouteMain,
  getRouteNews,
  getRouteProfile,
} from '@/app/routes/config/routes';
import { NewsPage } from '@/pages/NewsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { MainPage } from '@/pages/MainPage';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  NEWS = 'news',
  // last
  NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
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
    element: <div>Not found page</div>,
  },
};
