import { memo, useState, type FormEvent, type ChangeEvent } from 'react';
import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useLoginActions } from '@/features/Authentication/model/slice/loginSlice';
import { type Credentials } from '@/features/Authentication/model/types/loginSchema';
import { VALID_AUTH_DATA } from '@/shared/const/localstorage';
import { useUserActions } from '@/entities/User/model/slice/userSlice';
import { areObjectsEqual } from '@/shared/helpers/helpers';

interface LoginProps {}

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

export const Login = memo((props: LoginProps) => {
  const { t } = useTranslation();
  const { setLoginCredentials } = useLoginActions();
  const { initAuthData } = useUserActions();
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, username: event.target.value });
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.target.value.toString() });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isUserAuth = areObjectsEqual(credentials, VALID_AUTH_DATA);
    if (isUserAuth) {
      setLoginCredentials(credentials);
      initAuthData();
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input type="text" onChange={handleUsername} placeholder="Username" />
      <Input type="password" onChange={handlePassword} placeholder="Password" />
      <Button type="submit" text="Log In" />
    </LoginForm>
  );
});
