import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='hader-aera'>
                <h1>Bangladesh National Cricket Team Association</h1>
                <h2>Total Budget $50 Crores</h2>
            </div>
            <nav className='nav-area'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contactus">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;