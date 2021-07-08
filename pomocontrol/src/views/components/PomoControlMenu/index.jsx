import React from 'react'
import PropTypes from 'prop-types';
import { PomoControlMenuItem } from '@pomocontrol-components'
 
export function PomoControlMenu() {
    return (
        <nav>
            <ul>
                <PomoControlMenuItem text="Dashboard" path="/dashboard" />
                <PomoControlMenuItem text="About" path="/about" />
            </ul>
        </nav>
    )
}

PomoControlMenu.defaultProps = {

}

PomoControlMenu.propTypes = {

}