import React from 'react'
import PropTypes from 'prop-types'
import { PomoControlTitle } from '@pomocontrol-components';

export function PomoControlHeader({title, className}) {
    return (
        <header className={className} style={{ marginTop: '48px' }}>
            <PomoControlTitle text={title} />
        </header>
    );
}

PomoControlHeader.defaultProps = {
    className: ''
}

PomoControlHeader.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}