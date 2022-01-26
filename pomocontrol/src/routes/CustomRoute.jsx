import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from '@pomocontrol-layouts';

export function CustomRoute({ ...rest }) {
    // const user = useSelector(state => state && state.oidc  && state.oidc.user)

    return (
        <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Route {...rest} />
        </Layout>
    );
}
