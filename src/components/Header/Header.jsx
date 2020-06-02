import React  from 'react';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
        <img width="80" src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/landing-page-redo-make-a-gaming-logo/Deadnauts-Esports-Logo-Maker.png" alt=""/>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : 
            <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
}

export default Header;