import React from 'react'

import './drawerToggle.css';

export default function DrawerToggleButton(props) {
    return (
        <div>
            <button className='toggle-button' onClick={props.click}>
                <div className='toggle-button-line'></div>
                <div className='toggle-button-line'></div>
                <div className='toggle-button-line'></div>
            </button>
        </div>
    )
}
