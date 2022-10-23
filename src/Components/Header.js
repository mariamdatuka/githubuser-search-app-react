import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg';
import React from 'react'

function Header({toggleTheme, theme}) {
  return (
    <div className='header'>
    <p className='title'>devfinder</p>
    <div className='theme-box' onClick={toggleTheme}>
    {theme==='light'&& <>
    <p className='dark'>DARK</p>
     <img className='moon'src={Moon}/>
    </>}
    {theme==='dark'&& <>
    <p className='dark'>LIGHT</p>
    <img className='moon sun'src={Sun} alt=''/> 
    </>}
   </div>
    </div>
  )
}

export default Header;