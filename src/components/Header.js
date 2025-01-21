import React from 'react';
import "../styles/components/Header.scss";
import Place from "./Place.js";
import Search from "./Search.js";
import Settings from "./Settings.js";

function Header() {
    return (
        <div className="Header">
            <Place />
            <Search />
            <Settings />
        </div>
    );
}

export default Header;