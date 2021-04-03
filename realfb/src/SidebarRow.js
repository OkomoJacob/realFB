import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarRow.css";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {/* If there is src prop, render in the Avator as the src */ }
            
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{ title }</h4>
        </div>
    )
}

export default SidebarRow;
