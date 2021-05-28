import React, { useState } from "react";
import { appLinks } from "./navData";
import menuBar from "../../assets/images/menu.svg";
 import petooLogo from "../../assets/images/logo/logo.png";
 import logo from "../../assets/images/logo/login.png";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./CSS/NavBar.css";
function NavBar() {
  const [isLogin, setIsLogin] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className='navigation'>
      <div className='navList'>
        <div>
          <a href='/' className='logoContainer'>
            <img src={petooLogo} alt='LOGO' className='logoClassBig' />
            <img src={logo} alt='LOGO' className='logoClassSmall' />
          </a>
        </div>
        <div className='innerLinks'>
          <ul className='listInnerLinks'>
            {appLinks.map((e) => (
              <li className='innerLink' key={e.id}>
                <a href={e.url}>{e.text}</a>
              </li>
            ))}
          </ul>
        </div>
      
          <div className='rightLinks-max'>
              <Link className='ml-2' to='/register'>
              <button className='loginBtn' >
                Sign Up
              </button>
              </Link>
              <Link className='ml-2' to='/login'>
              <button className='loginBtn' >
                Log in
              </button>
              </Link>
          </div>
       
        {/*  Nav On 1024px is shown  */}
        <div className='SearchIcon'>
          <FiSearch size={35} style={{ margin: "0 50px" }} />
          <button className='show'>
            <img
              src={menuBar}
              alt='menuBar'
              onClick={() => {
                setShowNav(!showNav);
              }}
            />
          </button>
        </div>
      </div>
      <div className={showNav ? "showMenu" : "hideMenu"}>
        {/* conditional rendering*/}
        <ul className='showNavigation'>
          {appLinks.map((e) => (
            <li className='innerLink-SS withSVG' key={e.id}>
              {e.icon}
              <a href={e.url}>{e.text}</a>
            </li>
          ))}
        </ul>
       
          <div className='rightLinks'>
            <div className='bttns'>
              
            <Link className='ml-2' to='/register'>
              <button className='loginBtn' >
                Log in
              </button>
              </Link>
              <Link className='ml-2' to='/login'>
              <button className='loginBtn' >
                Log in
              </button>
              </Link>
            </div>
          </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
