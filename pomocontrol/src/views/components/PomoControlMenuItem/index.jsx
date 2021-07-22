import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function PomoControlMenuItem({id, text, path}) {
    
    return (
        <li key={id}>
            <Link to={path} href={path}>
                <span className="text-capitalize">{text}</span>
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