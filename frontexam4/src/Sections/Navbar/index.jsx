import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbarTitle'>
        <h2>Niro</h2>
      </div>
      <div className='navbarRoutes'>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/addpage">Add</Link>
        </div>    
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
    </div>
  )
}

export default Navbar