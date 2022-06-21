import React, {memo, useContext, useEffect, useState} from 'react';
import styles from './Navbar.module.css'
import {Link, useNavigate} from "react-router-dom";
import clsx from "clsx";
import SideMenu from "./side_menu/SideMenu";
import {useDispatch} from "react-redux";
import {getNavItem} from "../../../redux/action/Navbar";
import {findListCategory} from "../../../redux/action/Category";
import {toast} from "react-toastify";
import {logout} from "../../../redux/action/Login";

function Navbar() {
    const [navItems, setNavItems] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout())
    };

    const getNavItems = async () => {
        await dispatch(getNavItem()).then(resp => {
            setNavItems(resp.payload.data)
        }).catch((err) => {
            if (err.error.response.status === 401) {
                navigate("/login");
            }
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        });
    }

    useEffect(() => {
        getNavItems()
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
                        {navItems && navItems.length > 0 ? (
                            <>
                                <SideMenu sideBars={navItems}/>
                            </>
                        ) : null
                        }
                    </div>
                </div>


                <Link to={"/login"} className={clsx(styles.nav__link, styles.nav__logout)} onClick={logOut}>
                    <i className={clsx("bx bx-log-out", styles.nav__icon)}/>
                    <span className={styles.nav__name}> Log Out</span>
                </Link>
            </nav>
        </div>
    );
}

export default memo(Navbar);