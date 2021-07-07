import React from 'react';
import { Route } from 'react-router-dom';

export function CustomRoute({...rest}) {
    // const user = useSelector(state => state && state.oidc  && state.oidc.user)

    return <Route {...rest} />
}