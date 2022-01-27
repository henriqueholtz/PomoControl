import { ThemeProvider } from '@material-ui/core';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlFooter } from '@pomocontrol-components';
import { ListMenuAnonymous, ListMenuAuthenticated } from '@pomocontrol-menus';
import { PomoControlStoreContextToken } from '@pomocontrol-contexts';
import { theme } from './theme';

export function MixLayout({ children }) {
    const [menu, _setMenu] = useState(ListMenuAnonymous);
    const { token } = useContext(PomoControlStoreContextToken);

    const setMenu = useCallback(() => {
        console.log('setMenu');
        if (token) {
            if (menu !== ListMenuAuthenticated) {
                _setMenu(ListMenuAuthenticated);
            }
            return;
        }

        if (menu !== ListMenuAnonymous) {
            _setMenu(ListMenuAnonymous);
        }
    }, [menu, _setMenu, ListMenuAnonymous, ListMenuAuthenticated]);

    useEffect(() => {
        setMenu();
    }, [token]);

    return (
        <ThemeProvider theme={theme}>
            <div id="layout">
                <PomoControlMenu menu={menu} />
                {children}
                <PomoControlFooter />
            </div>
        </ThemeProvider>
    );
}

MixLayout.defaultProps = {};

MixLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
