import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div id='header'>
            <div className='logo'>
                <h1>Hector Silva-Robles</h1>
            </div>
            <nav className='nav'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
