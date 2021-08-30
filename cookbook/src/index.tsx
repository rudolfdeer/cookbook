import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { store } from './store/store';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
);


{/* <Provider store={store}>

</Provider> */}