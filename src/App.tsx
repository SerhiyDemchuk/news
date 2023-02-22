import { Container } from '@mui/material';
import { Suspense } from 'react';
import Header from '@/widgets/Header/Header';
import { AppRouter } from '@/app/providers/Router';

function App() {
  return (
    <Suspense fallback="Loading...">
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </Suspense>
  );
}

export default App;
