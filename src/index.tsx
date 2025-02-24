import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './App/store';

createRoot(document.getElementById('root') as HTMLDivElement).render(
<Provider store={store}>
  <App />
</Provider>); 