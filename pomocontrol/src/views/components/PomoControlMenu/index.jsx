import React from 'react'
// import PropTypes from 'prop-types';
import { PomoControlMenuItem } from '@pomocontrol-components';
import { ListMenuAnonymous } from './Menus'
// import { ListMenuAnonymous, ListMenuAuthenticated, ListMenuAdm } from './Menus'
 
export function PomoControlMenu() {
    // const [menu, setMenu] = useState();

    return (
        <nav>
            <h1>Menu</h1>
            <ul>
                {ListMenuAnonymous.map((menuItem) => <PomoControlMenuItem id={menuItem} text={menuItem} path={`/${menuItem}`} />
                )}
            </ul>
        </nav>
    )
}

PomoControlMenu.defaultProps = {

}

PomoControlMenu.propTypes = {

}