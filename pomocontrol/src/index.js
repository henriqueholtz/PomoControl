import { createBrowserHistory } from 'history';
import React from 'react';
import { PomoControlProviderToken } from '@pomocontrol-contexts';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './routes';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <PomoControlProviderToken>
            <App />
        </PomoControlProviderToken>
    </Router>,
    document.getElementById('root'),
);
