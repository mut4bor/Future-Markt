import { store } from 'shared/api/redux/store';
import { Provider } from 'react-redux';
import { MainPage } from './main';
import { Header } from 'entities/header';

export const Routing = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainPage />
    </Provider>
  );
};
