import React from 'react'

import DrawerToggleButton from '../header/SideDrawer/DrawerToggleButton'
import './header.css'
import { tsPropertySignature } from '@babel/types';

export default function Header(props) {
    return (
        <div id='header'>
            <div className='logo'>
                <h1>Hector Silva-Robles</h1>
            </div>
            <nav className='nav'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/skills'>Skills</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
                
            </nav>
            <div className='drawer'>
                    <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </div>
    )
}
