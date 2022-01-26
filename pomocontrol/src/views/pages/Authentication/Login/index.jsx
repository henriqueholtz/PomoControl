import React, { useContext } from 'react';
import { PomoControlHeader } from '@pomocontrol-components';

import { Button, Paper } from '@material-ui/core';

import { PomoControlStoreContextToken } from '@pomocontrol-contexts';
import { Redirect } from 'react-router-dom';
import styles from '../styles.module.scss';

export function Login() {
    const { token, setToken } = useContext(PomoControlStoreContextToken);

    const loginManual = () => {
        setToken('myToken');
    };

    if (token) {
        // TODO: Validar token
        console.log('Usuário já autenticado!');
        return <Redirect to="/" />;
    }

    return (
        <>
            <Paper className={`${styles.login} ${styles.background}`}>
                <PomoControlHeader className={styles.title} title="Login" />
                <div title="Login with Google">
                    <Button onClick={loginManual} style={{ zIndex: 999 }}>
                        Login Manual
                    </Button>
                </div>
            </Paper>
        </>
    );
}
