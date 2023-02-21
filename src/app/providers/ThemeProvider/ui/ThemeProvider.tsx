import { memo } from 'react';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import { type LinkProps } from '@mui/material/Link';
import Link from '@/shared/ui/Link/Link';

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      } as LinkProps,
      styleOverrides: {
        root: {
          marginRight: '16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  },
});

interface ThemeProviderProps {
  children: JSX.Element;
}

const ThemeProvider = memo((props: ThemeProviderProps) => {
  const { children } = props;
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
});

export default ThemeProvider;
