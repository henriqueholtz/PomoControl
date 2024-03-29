import React from 'react';
import PropTypes from 'prop-types';
import { useStorage } from '@pomocontrol-utils/Hooks';

import { PomoControlStoreContextToken } from './PomoControlStoreContextToken';

export const PomoControlProviderToken = ({ children }) => {
    const [token, _setToken] = useStorage('token');

    function setToken(newToken) {
        _setToken(newToken);
        if (newToken) localStorage.setItem('token', newToken);
        else localStorage.removeItem('token');
    }

    return (
        <PomoControlStoreContextToken.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </PomoControlStoreContextToken.Provider>
    );
};

PomoControlProviderToken.propTypes = {
    children: PropTypes.node.isRequired,
};

PomoControlProviderToken.defaultProps = {};
