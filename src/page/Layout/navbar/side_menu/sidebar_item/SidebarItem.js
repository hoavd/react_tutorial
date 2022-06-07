import React, {useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import styles from "../../Navbar.module.css";
import {Link} from "react-router-dom";

function SidebarItem({sideBar}) {
    const [active, setActive] = useState(false);
    function handleClick(e) {
    }
    return (
        <>{sideBar?.items.length>0 ?
            <div key={sideBar.id} className={clsx(styles.nav__dropdown, active ? styles.nav__active : "")}>
                <div id={sideBar.id} className={clsx(styles.nav__link)}>
                    <i className={clsx(sideBar.icon, styles.nav__icon)}/>
                    <span className={styles.nav__name}>{sideBar.title}</span>
                    <i className={clsx("bx bx-chevron-down", styles.nav__dropdown_icon)}/>
                </div>

                <div className={styles.nav__dropdown_collapse}>
                    <div className={styles.nav__dropdown_content}>
                        {
                            sideBar?.items.map((child) => {
                                return <Link key={child.id} to={child.href?child.href:"/"} className={styles.nav__dropdown_item}>
                                    {child.title}
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
            :
            <Link key={sideBar.id} to={sideBar.href} id={sideBar.id}
                  onClick={handleClick}
                  className={clsx(styles.nav__link, active ? styles.nav__active : "")}>
                <i className={clsx(sideBar.icon, styles.nav__icon)}/>
                <span className={styles.nav__name}>
                                {sideBar.title}
                            </span>
            </Link>}
        </>
    )
}


export default SidebarItem;