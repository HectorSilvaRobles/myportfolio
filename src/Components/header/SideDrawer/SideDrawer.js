import React from 'react'

import './sidedrawer.css'

export default function SideDrawer(props) {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div>
            <nav className={drawerClasses}>
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
