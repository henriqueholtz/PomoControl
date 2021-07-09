import React from 'react'
import { PomoControlHeader } from '@pomocontrol-components'
import { Container } from '@material-ui/core'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import styles from './styles.module.scss'

export function NotFound() {
    return (
        <Container disableGutters maxWidth={false} className={styles.container} >
            <PomoControlHeader className={styles.header} title="Sorry, we couldn't find this page."/>
            <SentimentVeryDissatisfiedIcon className={styles.icon} />
        </Container>
    )
}