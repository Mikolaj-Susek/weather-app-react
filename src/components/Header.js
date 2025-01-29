import React from 'react';
import "../styles/components/Header.scss";
import Search from "./Search.js";
import Settings from "./Settings.js";

function Header() {
    return (
        <div className="Header">
            <Search />
            <Settings />
        </div>
    );
}

export default Header;