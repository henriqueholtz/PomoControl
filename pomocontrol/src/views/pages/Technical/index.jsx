import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { PomoControlHeader } from 'views/components';
import styles from './styles.module.scss'

export function Technical() {
    return (
        <Container className={styles.container}>
            <PomoControlHeader title="What is Pomodoro Technique?" className={styles.header}/>
            <Typography variant="body1">
                The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for `tomato`, after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" rel="noreferrer" target="_blank">Wikipedia</a>
            </Typography>
        </Container>
    )
}