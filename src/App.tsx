import { Suspense, useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/Router';
import { useUserActions } from '@/entities/User/model/slice/userSlice';
import { getUserInited } from '@/entities/User';

function App() {
  const { initAuthData } = useUserActions();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    initAuthData();
  }, []);
  return <Suspense fallback="">{inited && <AppRouter />}</Suspense>;
}

export default App;
