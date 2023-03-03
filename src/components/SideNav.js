import React from 'react'
import '../App.css'
const SideNav = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <h1>H</h1>
      </div>
      <div className='nav-nav'>
       <ul className='nav-ul'>
        <li className='nav-li'><a href='#Home' className='nav-link nav-active'>Home</a></li>
        <li className='nav-li'><a href='#about' className='nav-link'>About</a></li>
        <li className='nav-li'><a href='#project' className='nav-link'>Project</a></li>
        <li className='nav-li'><a href='#contact' className='nav-link'>Contact</a></li>
       </ul>
      </div>
    </div>
  )
}

export default SideNav