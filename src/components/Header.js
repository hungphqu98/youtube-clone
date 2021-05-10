import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

const Header = () => {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon />
                <Link to="/">
                    <img 
                    className="header-logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                    alt="Youtube"
                    />
                </Link>
            </div>

            <div className="header-input">
                <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder="Search" 
                type="text"/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-searchIcon"/>
                </Link>
            </div>
            
            <div className="header-right">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar 
                alt="HQ" 
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                />
            </div>
        </div>
    )
}

export default Header
