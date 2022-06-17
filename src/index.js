import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import FirstComponent from './Component/FirstComponent';
import reportWebVitals from './reportWebVitals';
import FunctionComponent from './Component/FunctionComponent';
import LifeCycleComponent from './Component/LifeCycleComponent';
import APIComponent from './Component/APIComponent';
import UserComponent from './Component/UserComponent';
import ContactComponent from './Component/ContactComponent';

const routing = (
  <Router>
  <div>
    {/* <ul>
    <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/user">User</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
    </ul>*/}
    {/* <Route exact path="/" component={App}/>
    <Route path="/user" component={UserComponent}/>
    <Route path="/contact" component={ContactComponent}/> */}
  
  </div>
  </Router>
  );

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
