import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './App/Stores/store';
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css';
import './App/Layout/styles.css';
import App from './App/Layout/App';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <BrowserRouter basename="/">
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
            <App />
        </BrowserRouter>
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
