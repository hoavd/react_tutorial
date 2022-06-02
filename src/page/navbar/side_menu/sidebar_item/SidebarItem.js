import React, {useEffect, useRef, useState} from 'react';
import clsx from "clsx";
import styles from "../../Navbar.module.css";
import {Link} from "react-router-dom";

function SidebarItem({sideBar}) {
    const [active, setActive] = useState(false);

    function handleClick(e) {
    }

    return (
        <>{sideBar?.childSidebar ?
            <div key={sideBar.id} className={clsx(styles.nav__dropdown, active ? styles.nav__active : "")}>
                <Link id={sideBar.htmlElementId} to={"/" + sideBar.controller} className={clsx(styles.nav__link)}>
                    <i className={clsx("bx bx-user", styles.nav__icon)}/>
                    <span className={styles.nav__name}>{sideBar.label}</span>
                    <i className={clsx("bx bx-chevron-down", styles.nav__dropdown_icon)}/>
                </Link>

                <div className={styles.nav__dropdown_collapse}>
                    <div className={styles.nav__dropdown_content}>
                        {
                            sideBar?.childSidebar.map((child) => {
                                return <Link key={child.id} to={"/"} className={styles.nav__dropdown_item}>
                                    {child.label}
                                </Link>
                            })
                        }

                    </div>
                </div>
            </div>
            :
            <Link key={sideBar.id} to={"/" + sideBar.controller} id={sideBar.htmlElementId}
                  onClick={handleClick}
                  className={clsx(styles.nav__link, active ? styles.nav__active : "")}>
                <i className={clsx(sideBar.icon, styles.nav__icon)}/>
                <span className={styles.nav__name}>
                                {sideBar.label}
                            </span>
            </Link>}
        </>
    )
}


export default SidebarItem;