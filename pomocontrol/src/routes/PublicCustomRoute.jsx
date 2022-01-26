import React from 'react';
import { Route } from 'react-router-dom';
import { PublicLayout } from '@pomocontrol-layouts';

export function PublicCustomRoute({ ...rest }) {
    // const user = useSelector(state => state && state.oidc  && state.oidc.user)

    return (
        <PublicLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route {...rest} />
        </PublicLayout>
    );
}
