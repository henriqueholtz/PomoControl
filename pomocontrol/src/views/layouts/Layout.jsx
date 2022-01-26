import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlFooter } from '@pomocontrol-components';
import { theme } from './theme';

export function Layout({ children }) {
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

Layout.defaultProps = {};

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
