import React from 'react'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className='containers'>
     <p className='logo'>Dogger</p>
      <ul>
        <li><Link to="/"  >Home</Link></li>
        <li><Link to="/about"  >About</Link></li>
        {/* <li><Link to="/demo"  >demo</Link></li> */}
        <li><Link to="/service"  >Service</Link></li>
        <li><Link to="/contact"  >Contact</Link></li>
      </ul>
     </nav>
    </div>
  )
}

export default Navbar

