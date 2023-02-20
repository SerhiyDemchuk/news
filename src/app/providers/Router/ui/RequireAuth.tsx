import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRouteAuth } from '@/app/providers/Router/config/routes';
import { getUserInited } from '@/entities/User';

export function RequireAuth() {
  const location = useLocation();

  const inited = useSelector(getUserInited);

  if (!inited) {
    return (
      <Navigate
        replace
        to={getRouteAuth()}
        state={{ path: location.pathname }}
      />
    );
  }
  return <Outlet />;
}
