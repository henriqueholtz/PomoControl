import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import styles from './styles.module.scss';

export function PomoControlMenuItem({id, text, path}) {
    
    return (
        <Tooltip key={id} className={styles.item}>
            <Link to={path} href={path}>
                <span className="text-capitalize">{text}</span>
             </Link>
         </Tooltip>
    )
}

PomoControlMenuItem.defaultProps = {

}

PomoControlMenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}