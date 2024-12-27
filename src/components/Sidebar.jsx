import React from "react";
import "../styles/Sidebar.css";



function Sidebar() {
        return (
        <aside className="sidebar">
            <ul>
                <li><a href={'#home'}>Home</a></li>
                <li><a href={'#about'}>About</a></li>
                <li><a href={'#contact'}>Contact</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
