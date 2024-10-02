import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">TaskMate</a>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#get-started">Get Started</a></li>
            </ul>
            <div className="navbar-cta">
                <a href="#sign-up" className="cta-button">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;
