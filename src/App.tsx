import { Suspense } from 'react';
import './App.css';
import { AppRouter } from '@/app/routes';

function App() {
  return (
    <Suspense fallback="">
      <AppRouter />
    </Suspense>
  );
}

export default App;
