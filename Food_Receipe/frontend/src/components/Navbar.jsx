import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='divnavbar'>
            <Link to='/'>Receipe Hub</Link>
        </div>    
        <div>
            <a href=""><FaInstagram/></a>
        </div>    
        <div>
            <a href=""><FaFacebook/></a>
        </div>
        <div>
            <a href=""><FaTwitter/></a>
        </div>
        <div>
            <a href=""><FaPinterest/></a>  
        </div>    
        
    </nav>
  )
}

export default Navbar