import React, { useState, useEffect } from 'react'
import './Navbar.css'
import TokenIcon from '@mui/icons-material/Token';
import { NavItems } from './Navitems';
import {NavLink} from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Admin from '../assets/admin.jpg'


const Navbar = ({children}) => {
  const [open , setOpen] = useState(true)
  const handleClick = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480 || window.innerWidth <= 1023 || window.innerWidth <= 1280) {
        setOpen(false);
      }else {
        setOpen(true)
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='container'>
        <div className={`sidebar ${open ? "open" : "close"}`}>
          <div className='header'>
            <div className='inner'>
              <span onClick={handleClick}><TokenIcon className='inner-svg'/></span>
              {open && <span>Dashboard</span>}
            </div>
            <nav>
              <div className='navbar' id = 'active'>
                <div className='nav-inner'>
                  <span><DashboardIcon /></span>
                  {open && <span>Dashboard</span>}
                </div>
              </div>
              {NavItems.map((item,index) => (
                <NavLink to = {item.path} key = {index}>
                  <div className='navbar'>
                    <div className='nav-inner'>
                      <span>{item.imgSrc}</span>
                      {open && <span>{item.name}</span>}
                    </div>
                    <div>
                      {open && <span className='nav-arrow'>{item.icon}</span>}
                    </div>
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
          <div className='nav-footer'>
            <div className='nf-box'>
              <div className='nf-left'>
                <div>
                  <img src = {Admin} alt = 'admin' className='footer-img'/>
                </div>
                <div className='nf-text'>
                  <span>Mohit</span>
                  <span>Project Manager</span>
                </div>
              </div>
              <div><KeyboardArrowDownIcon /></div>
            </div>
          </div>
        </div>
        <main className='db-main'>{children}</main>
      </div>
    </>
  )
}

export default Navbar;