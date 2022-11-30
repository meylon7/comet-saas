import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../assets/style/sidebar.css'
import LOGO from '../../assets/images/logo.png'
import Event from '../../assets/images/events.png'
import LPR from '../../assets/images/lpr.png'
import Agent from '../../assets/images/agent.png'
import LIST from '../../assets/images/list.png'
import Face from '../../assets/images/face.png'
import User from '../../assets/images/user-photo.png'
import Users from '../../assets/images/users.png'
import Toggle from "../../assets/images/toggle-menu.svg"
import Logout from '../../assets/images/log-out.png'

const Sidebar = () => {
  const [isToggle, setToggle] = useState("sidebar");
  
  
  return (
    <nav className={isToggle}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={LOGO} alt="" width="100px" /><br />

          </span>

          <div className="text logo-text">
            <span className="name">Polaris</span>
            <span className="profession"></span>
          </div>
        </div>

        <i className='bx bx-chevron-right toggle' onClick={()=> isToggle === "sidebar" ? setToggle("sidebar close") : setToggle("sidebar")}>
          <img src={Toggle} alt="toggle" />
        </i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/managment" >
                <i className='bx bx-home-alt icon' >
                  <img src={Event} alt="events" />
                </i>
                <span className="text nav-text">Events Managment</span>
              </Link>
            </li>

            <li className="nav-link">
            <Link to="/" >
                <i className='bx bx-bar-chart-alt-2 icon' >
                  <img src={LPR} alt="LPR" />
                </i>
                <span className="text nav-text">LPR Dashbord</span>
              </Link>
            </li>

            <li className="nav-link">
            <Link to="/face" >
                <i className='bx bx-bell icon'>
                  <img src={Face} alt="face" />
                </i>
                <span className="text nav-text">Face Recognition</span>
              </Link>
            </li>

            <li className="nav-link">
            <Link to="/agent" >
                <i className='bx bx-pie-chart-alt icon' >
                  <img src={Agent} alt="agent" />
                </i>
                <span className="text nav-text">Agents Managment</span>
              </Link>
            </li>

            <li className="nav-link">
            <Link to="/list" >
                <i className='bx bx-heart icon' >
                  <img src={LIST} alt="list" />
                </i>
                <span className="text nav-text">List Management</span>
              </Link>
            </li>

            <li className="nav-link">
            <Link to="/users" >
                <i className='bx bx-wallet icon' >
                  <img src={Users} alt="users" />
                </i>
                <span className="text nav-text">Users</span>
              </Link>
            </li>

          </ul>
        </div>

        <div className="bottom-content">
          <li className="nav-link">
            <a href="#">
              <i className='bx bx-wallet icon' >
                <img src={User} alt="" />
              </i>
              <span className="text nav-text">Moshe</span>
            </a>
          </li>
          <li className="">
            <a href="#">
              <i className='bx bx-log-out icon' >
                <img src={Logout} alt="" />
              </i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>


        </div>
      </div>

    </nav>
  )
}

export default Sidebar