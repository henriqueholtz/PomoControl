import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlHeader } from '@pomocontrol-components';
import { NotFound } from '@pomocontrol-pages';
import { PomoControlFooter } from 'views/components';
import { theme } from './theme';

export function Layout({pages}) {
    const path = window.location.pathname;
    const currentPage = pages?.find(e => e?.paths?.find(p => p === path)) || null;
    if(!currentPage) return <NotFound />

    return (
        <ThemeProvider theme={theme} >
            <div id="layout">
                <PomoControlMenu />
                <PomoControlHeader title={currentPage.title} />
                <PomoControlFooter />
            </div>
        </ThemeProvider>
    )
}

Layout.defaultProps = {

}

Layout.propTypes = {
    pages: PropTypes.arrayOf({
        title: PropTypes.string.isRequired,
        paths: PropTypes.string.isRequired,
        hasMenu: PropTypes.string.isRequired,
        menus: PropTypes.string.isRequired,
    }).isRequired
}