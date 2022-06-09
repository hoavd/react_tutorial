import React, {memo, useContext, useEffect, useState} from 'react';
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";
import clsx from "clsx";
import SideMenu from "./side_menu/SideMenu";
import {useDispatch} from "react-redux";

function Navbar() {
    const [navItems, setNavItems] = useState([]);
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(logOut)
    };

    useEffect(() => {
        setNavItems(navItemsTemp)
    }, [])


    const navItemsTemp = [
        {
            "icon": "fas fa-home",
            "id": 45,
            "href": "/dashboard",
            "title": "Trang chủ",
            "items": []
        },
        {
            "icon": "fas fa-tools",
            "id": 46,
            "href": null,
            "title": "Quản trị hệ thống",
            "items": [
                {
                    "icon": "fas fa-users",
                    "id": 47,
                    "href": "/users",
                    "title": "Người sử dụng"
                },
                {
                    "icon": "fas fa-briefcase",
                    "id": 48,
                    "href": "/role",
                    "title": "Quản trị quyền"
                },
                {
                    "icon": "fas fa-sitemap",
                    "id": 49,
                    "href": "/sidebar",
                    "title": "Sidebar"
                },
                {
                    "icon": "fas fa-sitemap",
                    "id": 181,
                    "href": "/specializedBank",
                    "title": "Ngân hàng chuyên doanh"
                }
            ]
        },
        {
            "icon": "fas fa-users-cog",
            "id": 50,
            "href": null,
            "title": "Quản trị nghiệp vụ",
            "items": [
                {
                    "icon": "fas fa-list",
                    "id": 51,
                    "href": "/category",
                    "title": "Danh mục"
                },
                {
                    "icon": "fas fa-question-circle",
                    "id": 52,
                    "href": "/question",
                    "title": "Câu hỏi"
                },
                {
                    "icon": "fas fa-atom",
                    "id": 53,
                    "href": "/component",
                    "title": "Component"
                },
                {
                    "icon": "fas fa-boxes",
                    "id": 54,
                    "href": "/modelType",
                    "title": "Model Type"
                },
                {
                    "icon": "fas fa-box-open",
                    "id": 55,
                    "href": "/modelTypeQuestion",
                    "title": "Model Type Question"
                },
                {
                    "icon": "fas fa-box-open",
                    "id": 161,
                    "href": "/modelTypeGroup",
                    "title": "Model Type Group"
                },
                {
                    "icon": "fas fa-archive",
                    "id": 56,
                    "href": "/questionAnswerScore",
                    "title": "Question Answer Score"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 113,
                    "href": "/form",
                    "title": "Form"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 121,
                    "href": "/task",
                    "title": "Task"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 122,
                    "href": "/work",
                    "title": "Work"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 141,
                    "href": "/workflow",
                    "title": "Workflow"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 142,
                    "href": "/workflowParam",
                    "title": "Workflow Param"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 241,
                    "href": "/masterScale",
                    "title": "MasterScale"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 242,
                    "href": "/masterScaleParam",
                    "title": "MasterScale Param"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 261,
                    "href": "/approvalRole",
                    "title": "Quyền phê duyệt hạn mức"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 281,
                    "href": "/subModelTypeRel",
                    "title": "Model Type Relation"
                },
                {
                    "icon": "fa-brands fa-wpforms",
                    "id": 301,
                    "href": "/modelTypeOverride",
                    "title": "Model Type Override"
                }
            ]
        },
        {
            "icon": "fas fa-dollar-sign",
            "id": 321,
            "href": null,
            "title": "Báo cáo tài chính",
            "items": [
                {
                    "icon": "fas fa-dollar-sign",
                    "id": 322,
                    "href": "/financialType",
                    "title": "Loại BCTC"
                },
                {
                    "icon": "fas fa-dollar-sign",
                    "id": 326,
                    "href": "/financialParam",
                    "title": "Cấu hình tham số BCTC"
                },
                {
                    "icon": "fas fa-dollar-sign",
                    "id": 323,
                    "href": "/financialConfig",
                    "title": "Cấu hình BCTC"
                },
                {
                    "icon": "fas fa-dollar-sign",
                    "id": 324,
                    "href": "/financialTemplate",
                    "title": "Mẫu BCTC"
                },
                {
                    "icon": "fas fa-dollar-sign",
                    "id": 325,
                    "href": "/financialConfigMap",
                    "title": "Cấu hình map BCTC"
                }
            ]
        },
        {
            "icon": "fas fa-file-medical",
            "id": 114,
            "href": "/formDetail/befCreate",
            "title": "Khởi tạo hồ sơ",
            "items": []
        },
        {
            "icon": "fas fa-exclamation-triangle",
            "id": 221,
            "href": "/profileDashboard/needProcess",
            "title": "Hồ sơ cần xử lý",
            "items": []
        },
        {
            "icon": "fas fa-clock",
            "id": 222,
            "href": "/profileDashboard/processing",
            "title": "Hồ sơ đang thực hiện",
            "items": []
        },
        {
            "icon": "far fa-check-square",
            "id": 223,
            "href": "/profileDashboard/completed",
            "title": "Hồ sơ đã hoàn thành",
            "items": []
        },
        {
            "icon": "far fa-folder-open",
            "id": 224,
            "href": "/profileDashboard/all",
            "title": "Toàn bộ hồ sơ",
            "items": []
        }
    ]

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