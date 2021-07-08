import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function PomoControlMenuItem({text, path}) {
    return (
        <li>
            <Link to={path} href={path}>
                <span>{text}</span>
             </Link>
         </li>
    )
}

PomoControlMenuItem.defaultProps = {

}

PomoControlMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}