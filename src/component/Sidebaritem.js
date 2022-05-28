import React from 'react';
import {Link} from "react-router-dom";

function SidebarItem({sideBar}) {
    function handleClick(e) {
    }
    return (
      <div>
        <Link key={sideBar.id} to={"/" + sideBar.action} id={sideBar.id} onClick={handleClick}/>
      </div>
    )
}


export default SidebarItem;