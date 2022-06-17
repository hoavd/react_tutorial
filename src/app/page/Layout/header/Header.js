import React from 'react';
import styles from './Header.module.css'
import clsx from 'clsx'
import {IconButton, Menu, MenuItem} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {useSelector} from "react-redux";

function Header() {
    const userInfo = useSelector((state) => state.userInfo)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const loadingBar = useSelector((state) => state.loadingBar)
    console.log(loadingBar)
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                {/*<span className={styles.header__img}>cf</span>*/}
                <div className={styles.header__img}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                        <MenuItem onClick={handleClose}><span
                            style={{fontWeight: "bold"}}>{userInfo?.username}</span></MenuItem>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Menu>
                </div>
                {/*<img src={logo} alt="" className={styles.header__img}/>*/}
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