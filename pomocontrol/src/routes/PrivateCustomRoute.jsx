/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PomoControlStoreContextToken } from '@pomocontrol-contexts';
import { PrivateLayout } from '@pomocontrol-layouts';

export function PrivateCustomRoute({ ...rest }) {
    // const user = useSelector(state => state && state.oidc  && state.oidc.user)
    const { token } = useContext(PomoControlStoreContextToken);
    return <PrivateLayout>{token ? <Route {...rest} /> : <Redirect to="/login" />}</PrivateLayout>;
}

PrivateCustomRoute.defaultProps = {};

PrivateCustomRoute.propTypes = {};
