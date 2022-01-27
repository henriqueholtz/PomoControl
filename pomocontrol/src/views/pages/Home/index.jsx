import React, { useContext } from 'react';
import { PomoControlStoreContextToken } from '@pomocontrol-contexts';
import { PrivateHome } from './Private';
import { PublicHome } from './Public';

export function Home() {
    const { token } = useContext(PomoControlStoreContextToken);
    if (token) return <PrivateHome />;
    return <PublicHome />;
}
