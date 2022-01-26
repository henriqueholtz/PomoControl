import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlFooter } from '@pomocontrol-components';
import { theme } from './theme';

export function PrivateLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <div id="layout">
                <PomoControlMenu />
                {children}
                <PomoControlFooter />
            </div>
        </ThemeProvider>
    );
}

PrivateLayout.defaultProps = {};

PrivateLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
