import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

import styles from './styles.module.scss';

export function PomoControlTitle({text, className}) {
    return <Typography className={`${styles.title} ${className}`} variant="h1">{text}</Typography>
}

PomoControlTitle.defaultProps = {
    className: ''
}

PomoControlTitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}