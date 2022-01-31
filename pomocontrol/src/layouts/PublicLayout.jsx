import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlFooter } from '@pomocontrol-components';
import { ListMenuAnonymous } from '@pomocontrol-menus';
import { theme } from './theme';

export function PublicLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <div id="layout">
                <PomoControlMenu menu={ListMenuAnonymous} />
                {children}
                <PomoControlFooter />
            </div>
        </ThemeProvider>
    );
}

PublicLayout.defaultProps = {};

PublicLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
