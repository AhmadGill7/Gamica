
import ReactDOM from 'react-dom/client';

import App from './App.js';
import { Provider } from 'react-redux';
import { meraStore } from './store/store.js';


// browser m component ko send karta h
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={meraStore}>
            <App />
      </Provider>
);

