import React from 'react'
import Logo from '../../img/Scrim logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

function LogoSearch() {
  return (
    <div className='LogoSearch'>
        <img src={Logo}  alt=""  />
        <div className="Search">
            <input type="text" placeholder="Search"></input>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch