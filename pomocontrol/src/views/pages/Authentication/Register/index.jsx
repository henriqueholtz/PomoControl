import React from 'react'
// import PropTypes from 'prop-types';
import { PomoControlHeader } from '@pomocontrol-components'
import { UnavailableIcon } from 'views/components/PomoControl-icons'
import { Paper, Typography } from '@material-ui/core'
import styles from '../styles.module.scss'

export function Register() {
    
    return (
        <>
            <Paper className={`${styles.register} ${styles.background}`}>
                <PomoControlHeader className={styles.title} title="Register" />
                <UnavailableIcon width={60} height={60} viewBox="0 0 3 3" className={`overflow-initial ${styles.unavailable}`} />
                <Typography className="fw-600 txt-center mr-20" style={{ color: '#5c5b5b' }}>Unavailable</Typography>
            </Paper>
        </>
    )
}

Register.defaultProps = {

}

Register.propTypes = {
    // title: PropTypes.string.isRequired
}