import { Container } from '@mui/material';
import Header from '@/widgets/Header/Header';
import { AppRouter } from '@/app/providers/Router';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
