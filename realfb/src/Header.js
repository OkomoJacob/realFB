import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function Header() {
    return (
        <div className = "header">
            <div className="header__left">
            <img
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                    alt="" />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header_option">
                    <HomeIcon />
                </div>
            </div>
        
            <div className = "header__right"></div>
        </div>
    )
    
}
