import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, BrowserRouter} from 'react-router-dom';

import App from './App/App.jsx';

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>,
    document.getElementById('app')
);