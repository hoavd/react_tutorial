import React, {memo, useState} from 'react';
import SidebarItem from "./sidebar_item/SidebarItem";

const SideMenu = ({sideBars}) => {
    return (
        <>
            {
                sideBars.map((sideBar) => {
                    return <SidebarItem key={sideBar.id} sideBar={sideBar}/>
                })
            }
        </>
    )
}

export default memo(SideMenu)

