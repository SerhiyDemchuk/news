import { memo, Suspense, useCallback } from 'react';
import { Route, Routes, type RouteProps } from 'react-router-dom';

import { getRouteAuth } from '@/app/providers/Router/config/routes';
import { RequireAuth } from '@/app/providers/Router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/Router/config/routerConfig';

import { AuthenticationPage } from '@/pages/AuthenticationPage';

function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Route>
      <Route path={getRouteAuth()} element={<AuthenticationPage />} />
    </Routes>
  );
}

export default memo(AppRouter);
