import React,{useState} from 'react'
import searchimage from '../components/images/searchimage.png'
import logo from '../components/images/logo.jpg';
import './style.css'
export default function Navbar() {
  const [scrollPage,setScrollPage]=useState(false);
  const fixNav=()=>
  {
    if(window.scrollY>50)
    {
      setScrollPage(true);
    }
    else{
      setScrollPage(false);
    }
  }
  window.addEventListener("scroll",fixNav);

  return (
    <>
    <header className={`${scrollPage ? 'fixed' : ''}`}>
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
    </header>
    
    
      </>
  )
}
