import { Container, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

export function MuiTheme() {
    const theme = useTheme();

    return (
        <Container>
            <Typography variant="h2">About this theme (Mui)</Typography>
            
            <Typography variant="h6">{`spacing ${theme.spacing}`}</Typography>;
        </Container>
    )
}