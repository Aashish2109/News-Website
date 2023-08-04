import React from 'react'
import searchimage from '../components/searchimage.png'
import logo from '../components/logo.jpg'
import './style.css'
export default function () {
  return (
    <>
    <div>
      <nav className='mainnav'>
        <img src={logo} alt='mylogo'></img>
          <div>
            <ul className='nav-items'>
            <li className='onhover'>Finance</li>
            <li className='onhover'>IPL</li>
            <li className='onhover'>Technology</li>
            </ul>
          </div>
          <div className='search'>
            <img src={searchimage} alt='search'></img>
            <input type='text' placeholder='search here'></input>
          </div>
        
      </nav>
    </div>
    
    
      </>
  )
}
