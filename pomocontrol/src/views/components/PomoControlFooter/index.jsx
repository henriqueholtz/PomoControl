import { Container, Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles.module.scss'

export function PomoControlFooter() {
    return (
        <Container maxWidth={null} className={styles.container}>
            <Typography variant="body2">© {new Date().getFullYear()} - PomoControl</Typography>
        </Container>
    )
}