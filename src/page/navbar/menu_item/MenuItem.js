import React, {memo} from 'react';
import styles from '../Navbar.module.css'
import SideMenu from "../side_menu/SideMenu";
import {Link} from "react-router-dom";

function MenuItem(props) {
    const {menu} = props
    return (
        <>
            <Link key={menu.id} to={menu.path}>{menu.label}</Link>
        </>
    );
}

export default memo(MenuItem);