import {
  memo,
  useState,
  useCallback,
  type FormEvent,
  type ChangeEvent,
} from 'react';
import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { areObjectsEqual } from '@/shared/helpers/helpers';
import { VALID_AUTH_DATA } from '@/shared/const/localstorage';
import { useAuthActions } from '@/features/Authentication/model/slice/authSlice';
import { type Credentials } from '@/features/Authentication/model/types/authSchema';

export const Login = memo(() => {
  const { t } = useTranslation('authentication');
  const { login } = useAuthActions();
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const handleUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, username: event.target.value });
    },
    [credentials],
  );

  const handlePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCredentials({
        ...credentials,
        password: event.target.value.toString(),
      });
    },
    [credentials],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isUserAuth = areObjectsEqual(credentials, VALID_AUTH_DATA);
    if (isUserAuth) {
      login(credentials);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input
        type="text"
        onChange={handleUsername}
        placeholder={t('Username')}
      />
      <Input
        type="password"
        onChange={handlePassword}
        placeholder={t('Password')}
      />
      <Button type="submit" text={t('Log In')} />
    </LoginForm>
  );
});

const LoginForm = styled('form')(({ theme }) => ({
  width: 300,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  background: 'white',
  padding: 30,
  borderRadius: 10,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
}));
