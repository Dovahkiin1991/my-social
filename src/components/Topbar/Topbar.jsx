import React  from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return <div className={classes.bar}>
        <span className="time">Today - <b>{new Date().toLocaleTimeString()}</b></span>
    </div>;
}

export default Topbar;