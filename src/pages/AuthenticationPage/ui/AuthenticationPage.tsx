import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface AuthenticationPageProps {}

const AuthenticationPage = memo((props: AuthenticationPageProps) => {
  const { t } = useTranslation();

  return <div>AuthenticationPage</div>;
});

export default AuthenticationPage;
