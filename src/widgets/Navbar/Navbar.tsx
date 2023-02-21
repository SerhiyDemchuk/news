import { memo } from 'react';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import { styled } from '@mui/material';
import { getIsAuthenticated } from '@/features/Authentication/model/selectors/getIsAuthenticated';

const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

interface NavbarProps {}

const Navbar = memo((props: NavbarProps) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <Nav>
      <Link href="/">Main</Link>
      <Link href="/news">News</Link>
      {isAuthenticated && <Link href="/profile">Profile</Link>}
    </Nav>
  );
});

export default Navbar;
