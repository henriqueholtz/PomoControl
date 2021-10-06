import { Container, Tab, Tabs, Typography } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import React, { useState, useCallback } from 'react';
import { Buttons } from './Buttons';

export function MuiTheme() {
    const [tab, setTab] = useState(0)
    // const theme = useTheme();

    const handleTab = useCallback((e, newTab) => {
        setTab(newTab);
    }, [setTab])

    const TabPanel = ({ value, index, children }) => {
        if (value !== index) return null;

        return children;
    }

    return (
        <Container>
            <Typography variant="h3">About this theme (Mui)</Typography>
            
            <Tabs value={tab} onChange={handleTab} >
                <Tab label="Buttons" tabIndex={0} />
            </Tabs>

            <TabPanel value={tab} index={0}>
                <Buttons />
            </TabPanel>
        </Container>
    )
}