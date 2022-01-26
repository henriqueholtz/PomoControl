import { createBrowserHistory } from 'history';
import React from 'react';
import { PomoControlProviderToken } from '@pomocontrol-contexts';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './routes';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <PomoControlProviderToken>
                <App />
            </PomoControlProviderToken>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
