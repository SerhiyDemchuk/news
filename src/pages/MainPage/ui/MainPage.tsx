import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage = memo((props: MainPageProps) => {
  const { t } = useTranslation('main');

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{t('MainPage')}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer" />
      </div>
      <div className="card">
        <button
          type="button"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
});

export default MainPage;
