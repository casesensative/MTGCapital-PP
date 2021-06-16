import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from './context/UserContext';
import {SearchProvider} from './context/SearchContext';
import {InterestsProvider} from './context/InterestsContext';
import {MarginsProvider} from './context/MarginsContext';
import {HashRouter, BrowserRouter} from 'react-router-dom';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <UserProvider>
          <InterestsProvider>
            <MarginsProvider>
              <App />
            </MarginsProvider>
          </InterestsProvider>
        </UserProvider>
      </SearchProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
