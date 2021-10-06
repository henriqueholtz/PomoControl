import { Container } from '@material-ui/core'
import React from 'react'
import styles from './styles.module.scss'

export function PomoControlFooter() {
    return (
        <Container className={styles.container}>
            © {new Date().getFullYear()} - PomoControl
        </Container>
    )
}