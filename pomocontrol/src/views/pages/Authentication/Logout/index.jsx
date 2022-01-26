import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { PomoControlStoreContextToken } from '@pomocontrol-contexts';

export function Logout() {
    const { setToken } = useContext(PomoControlStoreContextToken);

    useEffect(() => {
        setToken(null);
    }, []);

    return <Redirect to="/login" />;
}
