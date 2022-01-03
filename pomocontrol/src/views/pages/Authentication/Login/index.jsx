import React from 'react'
import { PomoControlHeader } from '@pomocontrol-components'
import { Input, Paper } from '@material-ui/core'

import styles from '../styles.module.scss'

export function Login() {
    return (
        <>
            <Paper className={`${styles.login} ${styles.background}`}>
                <PomoControlHeader className={styles.title} title="Login" />
                <Input type="password"/>
            </Paper>
        </>
    )
}