import './index.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
import { Home } from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    {/**<App />**/}
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
