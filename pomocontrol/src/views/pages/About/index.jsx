import React from 'react';
import { Link } from 'react-router-dom';
import { PomoControlHeader } from '@pomocontrol-components';
import { Container, Typography } from '@material-ui/core';

export function About() {
    return (
        <>
            <Container style={{ marginTop: '10%', paddingLeft: '25%' }}>
                <PomoControlHeader title="About PomoControl" />
                <Typography style={{ marginTop: '15px' }}>
                    {`This is a open source project to control your Pomodoro. `}
                    <Link to="/Pomodoro">See more here</Link>
                </Typography>
                <Typography style={{ marginTop: '15px' }}>
                    {`See the GitHub repository from frontend `}
                    <a href="https://github.com/henriqueholtz/PomoControl" target="_blank" rel="noreferrer noopener" noope>
                        here
                    </a>
                </Typography>
                <Typography style={{ marginTop: '15px' }}>
                    {`See also the GitHub repository from backend `}
                    <a href="https://github.com/henriqueholtz/PomoControl-backend" target="_blank" rel="noreferrer noopener" noope>
                        here
                    </a>
                </Typography>
            </Container>
        </>
    );
}
