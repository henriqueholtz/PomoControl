import { createContext } from 'react';

export const PomoControlStoreContextToken = createContext({
    token: null,
    setToken: () => {},
});