import React from 'react'
import { PomoControlHeader } from '@pomocontrol-components'
import { GoogleAuthenticationIcon } from '@pomocontrol-icons'
import { Paper } from '@material-ui/core'

import styles from '../styles.module.scss'

export function Login() {
    return (
        <>
            <Paper className={`${styles.login} ${styles.background}`}>
                <PomoControlHeader className={styles.title} title="Login" />
                <div title="Login with Google">
                    <GoogleAuthenticationIcon  viewBox="0 0 500 500" />
                </div>
            </Paper>
        </>
    )
}