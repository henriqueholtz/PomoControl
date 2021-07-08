import React from 'react'
import PropTypes from 'prop-types';
import { PomoControlMenu, PomoControlHeader } from '@pomocontrol-components'
import { NotFound } from '@pomocontrol-pages'
import { EnumPages } from '@pomocontrol-enums'

const pages =  Object.keys(EnumPages).map(value => ({
    title: value, 
    path: EnumPages[value]
}));

export function Layout() {
    const path = window.location.pathname;
    const currentPage = pages.find(e => e?.path.find(p => p === path));
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