import React, {memo, useContext, useEffect, useState} from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";
import clsx from "clsx";
import MenuItem from "./menu_item/MenuItem";


function Navbar() {
    const [menuItems, setMenuItems] = useState([]);
    const menu = [
        {menuId: 1, label: "Home", path: "/"},
        {menuId: 2, label: "User", path: "/user"}
    ]
    const logOut = () => {
        // auth.logout();
    };

    useEffect(() => {


    }, [])

    return (
        <div className={clsx(styles.nav)} id="navbar">
            <nav className={styles.nav__container}>
                <div>
                    {/*HOME*/}
                    <Link to={"/"} className={clsx(styles.nav__link, styles.nav__logo)}>
                        <i className={clsx("bx bxs-disc", styles.nav__icon)}/>
                        <span className={styles.nav__logo_name}>TNTech</span>
                    </Link>

                    <div className={styles.nav__list}>
                        {menu && menu.length > 0 ? (
                            <>
                                {
                                    menu.map((item, index) => (
                                        <MenuItem key={index} menu={item}/>
                                    ))
                                }
                            </>
                        ) : null
                        }
                    </div>
                </div>

                <Link to={"/login"} className={clsx(styles.nav__link, styles.nav__logout)} onClick={logOut}>
                    <i className={clsx("bx bx-log-out", styles.nav__icon)}/>
                    <span className={styles.nav__name}>
                                    Log Out
                                </span>
                </Link>


            </nav>
        </div>
    );
}

export default memo(Navbar);