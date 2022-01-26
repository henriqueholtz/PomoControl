import { AppBar } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { PomoControlMenuItem } from './PomoControlMenuItem';
import styles from './styles.module.scss';

export function PomoControlMenu({ menu }) {
    return (
        <AppBar className={styles.appBar}>
            {menu?.map((menuItem) => (
                <PomoControlMenuItem key={menuItem} id={menuItem} text={menuItem} path={`/${menuItem}`} />
            ))}
        </AppBar>
    );
}

PomoControlMenu.defaultProps = {};

PomoControlMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string).isRequired,
};
