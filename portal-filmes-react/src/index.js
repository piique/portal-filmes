import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import PaginaNotFound from './PaginaNotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/sobre" component={Sobre} />
      <Route path='*' component={PaginaNotFound} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// PaginaNotFound.js

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Sobre from './Sobre';
// import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//     <Sobre />
//   </ BrowserRouter>
//   , document.getElementById('root'));
// registerServiceWorker();