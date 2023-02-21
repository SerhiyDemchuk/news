import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRouteAuth } from '@/app/providers/Router/config/routes';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={getRouteAuth()}
        state={{ path: location.pathname }}
      />
    );
  }
  return children;
};
