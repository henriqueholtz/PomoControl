import React from 'react';
import { SvgIcon } from "@material-ui/core";

export function UnavailableIcon(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <SvgIcon {...props}>
        <path xmlns="http://www.w3.org/2000/svg" d="M8 0C3.588 0 0 3.588 0 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 1c3.872 0 7 3.128 7 7a6.968 6.968 0 0 1-1.71 4.582L3.417 2.711A6.968 6.968 0 0 1 8 1zM2.711 3.418l9.871 9.871A6.968 6.968 0 0 1 8 15c-3.872 0-7-3.128-7-7 0-1.756.647-3.355 1.711-4.582z" 
            color="#000" fontWeight="400" fontFamily="sans-serif" white-space="normal" overflow="visible" fill="gray"/>
    </SvgIcon>
}