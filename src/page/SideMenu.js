import React, {memo, useState} from 'react';
import SidebarItem from "../component/Sidebaritem";

const SideMenu = () => {
    const sideBars = [
        {id: 1, action:"login"},
        {id: 2, action:"home"},
    ]

    return (
        <div>
            {
                sideBars.map((sideBar) => {
                    return <SidebarItem key={sideBar.id} sideBar={sideBar}/>
                })
            }
        </div>
    )
}

export default memo(SideMenu)

