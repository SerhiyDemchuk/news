import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material';
import Navbar from '@/widgets/Navbar/Navbar';
import { Button } from '@/shared/ui/Button/Button';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';
import { useAuthActions } from '@/features/Authentication/model/slice/authSlice';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
}));

interface HeaderProps {}

const Header = memo((props: HeaderProps) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { logout } = useAuthActions();
  const navigate = useNavigate();

  const redirectToAuth = () => {
    navigate('/auth', { replace: true });
  };
  return (
    <Wrapper>
      <Navbar />
      {isAuthenticated ? (
        <Button onClick={() => logout()} text="Logout" />
      ) : (
        <Button onClick={redirectToAuth} text="Login" />
      )}
    </Wrapper>
  );
});

export default Header;
