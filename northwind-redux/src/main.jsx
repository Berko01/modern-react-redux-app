import { createRoot } from 'react-dom/client'
import App from './components/root/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from '../src/components/app/store.js';
import 'alertifyjs/build/css/alertify.min.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
