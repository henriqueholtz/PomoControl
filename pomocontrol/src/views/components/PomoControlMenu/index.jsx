import React from 'react'
import PropTypes from 'prop-types';
import { PomoControlMenuItem } from '@pomocontrol-components';
 
export function PomoControlMenu() {
    return (
        <nav>
            <h1>Menu</h1>
            <ul>
                <PomoControlMenuItem id={1} text="Dashboard" path="/dashboard" />
                <PomoControlMenuItem id={2} text="About" path="/about" />
                <PomoControlMenuItem id={3} text="Not Found Custom" path="/404" />
            </ul>
        </nav>
    )
}

PomoControlMenu.defaultProps = {

}

PomoControlMenu.propTypes = {

}