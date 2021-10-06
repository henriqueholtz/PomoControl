import { Button, Typography } from '@material-ui/core'
import React from 'react'

export function Buttons() {
    return (
        <>
            <br />
            <Typography variant="h4">Buttons </Typography>
            <Typography variant="body1">variants: contained, outlined, text(default)</Typography>
            <Typography variant="body1">Colors: default, inherit, primary, secondary</Typography>
            
            <br />
            <br />
            <div title="contained">
                <Button variant="contained" color="default">contained Default</Button>
                <Button variant="contained" color="inherit">contained Inherit</Button>
                <Button variant="contained" color="primary">contained Primary</Button>
                <Button variant="contained" color="secondary">contained Secondary</Button>
            </div>

            <br />

            <div title="outlined">
                <Button variant="outlined" color="default">outlined Default</Button>
                <Button variant="outlined" color="inherit">outlined Inherit</Button>
                <Button variant="outlined" color="primary">outlined Primary</Button>
                <Button variant="outlined" color="secondary">outlined Secondary</Button>
            </div>

            <br />
            
            <div title="text">
            <Button variant="text" color="default">text Default</Button>
            <Button variant="text" color="inherit">text Inherit</Button>
            <Button variant="text" color="primary">text Primary</Button>
            <Button variant="text" color="secondary">text Secondary</Button>
            </div>
        </>
    )
}