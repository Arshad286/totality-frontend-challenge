import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
   const [navHeight, setNavHeight] = useState(false);
   const navigate  = useNavigate();
   const gotoHome = ()=>{
    navigate('/');
  }

  return (
    <>
        <nav className={navHeight ? "show nav" : "nav"}>
      <div className='logo' onClick={() => gotoHome}> Lental Website</div>
        <ul>
          <Link to={"/"} >Home </Link>

            <li>
            <Link to={"/Contactus"}>Contact us </Link>
            </li>

           <li>
            <Link to={"/Villas"}> Villa </Link>
            </li>
            
            <li> 
              <Link to={"/Cart"}>Cart </Link>
              
              </li>
        </ul>
        <RxHamburgerMenu className='hamburger'
        onClick={() => setNavHeight(!navHeight)} />
        </nav>
    </>
  )
}

export default Navbar