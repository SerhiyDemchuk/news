import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Login } from '@/features/Authentication';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';

interface AuthenticationPageProps {}

const AuthenticationPage = memo((props: AuthenticationPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return <Login />;
});

export default AuthenticationPage;
