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
