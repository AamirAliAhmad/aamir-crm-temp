import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import RouteRouting from './ReactRouter/RouteRouting';
import MasterPage from './MasterLayout/MasterPage';


ReactDOM.render(
  <React.StrictMode>
    {/* <RouteRouting></RouteRouting> */}
    <MasterPage></MasterPage>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
