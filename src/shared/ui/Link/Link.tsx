import {
  NavLink as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { forwardRef } from 'react';

interface NavLinkProps extends RouterLinkProps {
  text: string;
  to: string;
}

export const Link = forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink
      style={navLinkStyles}
      data-testid="custom-link"
      ref={ref}
      to={href}
      {...other}
    />
  );
});

export default Link;
