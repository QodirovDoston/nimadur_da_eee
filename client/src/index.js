import React,  {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DataProvider} from './GlobalState'
import App from './App';
import Loading from './components/main/utils/loading/Loading'

import './i18n'

ReactDOM.render(
  <Suspense fallback={(<Loading />)}>
    <DataProvider>
      <App />
    </DataProvider>
  </Suspense>,
  document.getElementById('root')
);

