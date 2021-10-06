import { AppBar } from '@material-ui/core';
import React from 'react'
// import PropTypes from 'prop-types';
import { PomoControlMenuItem } from './PomoControlMenuItem';
import { ListMenuAnonymous } from './Menus'
import styles from './styles.module.scss';
// import { ListMenuAnonymous, ListMenuAuthenticated, ListMenuAdm } from './Menus'
 
export function PomoControlMenu() {
    // const [menu, setMenu] = useState();

    return (
        <AppBar className={styles.appBar}>
            {ListMenuAnonymous.map((menuItem) => 
                <PomoControlMenuItem id={menuItem} text={menuItem} path={`/${menuItem}`} />
            )}
        </AppBar>
    )
}

PomoControlMenu.defaultProps = {

}

PomoControlMenu.propTypes = {

}