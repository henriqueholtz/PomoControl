import React from 'react'
// import PropTypes from 'prop-types';
import { PomoControlHeader } from '@pomocontrol-components'
import { Paper } from '@material-ui/core'
import styles from '../styles.module.scss'

export function Register() {
    
    return (
        <>
            <Paper className={`${styles.register} ${styles.background}`}>
                <PomoControlHeader className={styles.title} title="Register" />

            </Paper>
        </>
    )
}

Register.defaultProps = {

}

Register.propTypes = {
    // title: PropTypes.string.isRequired
}