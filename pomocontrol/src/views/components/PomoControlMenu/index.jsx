import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { PomoControlMenuItem } from '@pomocontrol-components';
import { ListMenuAnonymous, ListMenuAuthenticated, ListMenuAdm } from './Menus'
 
export function PomoControlMenu() {
    const [menu, setMenu] = useState();

    return (
        <nav>
            <h1>Menu</h1>
            <ul>
                {ListMenuAnonymous.map((menuItem, key) => {
                    return <PomoControlMenuItem id={key} text={menuItem} path={`/${menuItem}`} />
                })}
            </ul>
        </nav>
    )
}

PomoControlMenu.defaultProps = {

}

PomoControlMenu.propTypes = {

}