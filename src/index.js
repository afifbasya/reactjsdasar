import React from 'react';
import ReactDOM from 'react-dom';
// import App from './reactjsdasar/App';
// import Variabel from './reactjsdasar/Variabel';
// import StateProps from './reactjsdasar/StateProps'
// import Map from './reactjsdasar/Map'
// import Lifecycle from './reactjsdasar/Lifecycle'

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);