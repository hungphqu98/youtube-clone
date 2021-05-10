import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarIcon"/>
            <h2 className="sidebarTitle">{title}</h2>
        </div>
    )
}

export default SidebarRow;
