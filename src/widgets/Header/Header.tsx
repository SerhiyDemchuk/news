import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Navbar from '@/widgets/Navbar/Navbar';
import { Button } from '@/shared/ui/Button/Button';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';
import { useAuthActions } from '@/features/Authentication/model/slice/authSlice';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
}));

interface HeaderProps {}

const Header = memo((props: HeaderProps) => {
  const { t } = useTranslation('translation');
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { logout } = useAuthActions();
  const navigate = useNavigate();

  const redirectToAuth = () => {
    navigate('/auth', { replace: true });
  };
  return (
    <Wrapper>
      <Navbar />
      <LanguageSwitcher />
      {isAuthenticated ? (
        <Button onClick={() => logout()} text={t('Logout')} />
      ) : (
        <Button onClick={redirectToAuth} text={t('Login')} />
      )}
    </Wrapper>
  );
});

export default Header;
