import React from 'react'
import { PomoControlHeader } from '@pomocontrol-components'
import { Container } from '@material-ui/core'

import styles from './styles.module.scss'

export function NotFound() {
    return (
        <Container disableGutters maxWidth={false} className={styles.container} >
            <PomoControlHeader className={styles.header} title="Sorry, we couldn't find this page."/>
            <img className={styles.image} src="/assets/png/notfound-512.png" alt="Page Not Found (Error code 404)"/>
        </Container>
    )
}