import React from 'react';
import { Route } from 'react-router-dom';
import { MixLayout } from '@pomocontrol-layouts';

export function MixCustomRoute({ ...rest }) {
    // const user = useSelector(state => state && state.oidc  && state.oidc.user)

    return (
        <MixLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route {...rest} />
        </MixLayout>
    );
}
