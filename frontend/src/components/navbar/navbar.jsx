// import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_main-div'>
        <ul className='navbar_main-div_ul'>
            <div>
                <li><a href=''>Home</a></li>
                <li><a href=''>Profile</a></li>
            </div>
            <div>
                <li><button>Logout</button></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar