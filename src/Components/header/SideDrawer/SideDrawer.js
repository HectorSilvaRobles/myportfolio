import React from 'react'

import './sidedrawer.css'

export default function SideDrawer(props) {
    return (
        <div>
            <nav className='side-drawer'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/skills'>Skills</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
