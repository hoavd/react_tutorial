import React from 'react';

import logo from "../../../assets/images/logo_tntech.png"
import styles from './Header.module.css'
import clsx from 'clsx'
import {Link} from "react-router-dom";

function Header() {
    const showMenu = () => {
        const toggleBtn = document.getElementById('header-toggle')
        if (toggleBtn) {
            const nav = document.getElementById('navbar')
            nav.classList.toggle('show_menu')

            //change icon
            toggleBtn.classList.toggle('bx-x')
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <img src={logo} alt="" className={styles.header__img}/>
                <div className={styles.header__logo}>
                    <strong>REACT DEMO</strong>
                </div>
                <div className={styles.header__search}>
                    <input type="search" placeholder="Search" className={styles.header__input}/>
                    <i className={clsx("bx bx-search", styles.header__icon)}/>
                </div>

                <div className={styles.header__toggle}>
                    <i className={clsx("bx bx-menu", styles.header__icon)}
                       id="header-toggle"
                       onClick={showMenu}/>
                </div>
            </div>
        </header>
    );
}

export default Header;