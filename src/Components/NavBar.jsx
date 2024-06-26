import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav' >
      <div className='n-logo'>Logo</div>
      <div className='n-main'>
        <div className='n-jobs'>Jobs</div>
        <div className='n-messages'>Messages</div>
        <div className='n-payments'>Payments</div>
      </div>
    </div>
  )
}

export default NavBar
