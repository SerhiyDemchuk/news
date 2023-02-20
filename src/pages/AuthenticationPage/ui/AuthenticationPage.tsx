import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login } from '@/features/Authentication';
import { getUserInited } from '@/entities/User';

interface AuthenticationPageProps {}

const AuthenticationPage = memo((props: AuthenticationPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const inited = useSelector(getUserInited);
  console.log('inited: ', inited);
  useEffect(() => {
    if (inited) {
      navigate('/');
    }
  }, [navigate, inited]);

  return (
    <div>
      <Login />
    </div>
  );
});

export default AuthenticationPage;
