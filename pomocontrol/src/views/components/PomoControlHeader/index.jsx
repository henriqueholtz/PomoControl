import React from 'react'
import PropTypes from 'prop-types'

export function PomoControlHeader({title}) {
    return <header>
            <h1>{title}</h1>
        </header>
}

PomoControlHeader.defaultProps = {
    
}

PomoControlHeader.propTypes = {
    title: PropTypes.string.isRequired
}