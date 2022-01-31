import { Container, Tab, Tabs, Typography } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import React, { useState, useCallback } from 'react';
import { Buttons } from './Buttons';
import { Typographys } from './Typographys';

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
                <Tab label="Buttons" value={0} tabIndex={0} />
                <Tab label="Typographys" />
            </Tabs>

            <TabPanel value={tab} index={0}>
                <Buttons />
            </TabPanel>
            
            <TabPanel value={tab} index={1}>
                <Typographys />
            </TabPanel>
        </Container>
    )
}