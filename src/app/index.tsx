import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';
import './index.scss';
import { Suspense } from 'react';
import { Header } from 'entities/header';
import { MainPage } from 'pages';

export function App() {
  return (
    <Suspense fallback={'Loading...'}>
      <Header />
      <MainPage />
    </Suspense>
  );
}

export default App;
