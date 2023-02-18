import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getRouteAuthentication } from '../config/routes';

export function RequireAuth() {
  const location = useLocation();

  // if (!userInfo) {
  //   return (
  //     <Navigate
  //       replace
  //       to={getRouteAuthentication()}
  //       state={{ path: location.pathname }}
  //     />
  //   );
  // }

  return <Outlet />;
}
