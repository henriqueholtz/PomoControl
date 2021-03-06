import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlHeader } from '@pomocontrol-components';
import { NotFound } from '@pomocontrol-pages';

export function Layout({pages}) {
    const path = window.location.pathname;
    const currentPage = pages?.find(e => e?.paths?.find(p => p === path)) || null;
    if(!currentPage) return <NotFound />

    return (
        <div id="layout">
            <PomoControlMenu />
            <PomoControlHeader title={currentPage.title} />
        </div>
    )
}

Layout.defaultProps = {

}

Layout.propTypes = {
    // title: PropTypes.string.isRequired
}