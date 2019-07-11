import React from 'react'

import './drawerToggle.css';

export default function DrawerToggleButton(props) {
    return (
        <div>
            <button className='toggle-button'>
                <div className='toggle-button-line'></div>
                <div className='toggle-button-line'></div>
                <div className='toggle-button-line'></div>
            </button>
        </div>
    )
}
