import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from '@mui/material/Link';
import { styled } from '@mui/material';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';

const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

interface NavbarProps {}

const Navbar = memo((props: NavbarProps) => {
  const { t } = useTranslation('translation');
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Nav>
      <Link href="/">{t('Main')}</Link>
      <Link href="/news">{t('News')}</Link>
      {isAuthenticated && <Link href="/profile">{t('Profile ')}</Link>}
    </Nav>
  );
});

export default Navbar;
