import React, { Component }  from 'react';

const Navbar = () => {
    return <nav className="nav">
        <div>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Music</a>

            <a href="#">Settings</a>
        </div>
    </nav>;
}

export default Navbar;