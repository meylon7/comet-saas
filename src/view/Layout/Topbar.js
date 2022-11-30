import React from 'react'
import '../../assets/style/Topbar.css'
import User from '../../assets/images/user.png'
import Search from '../../assets/images/search.png'
import Config from "../../assets/images/config.png"
import Folder from '../../assets/images/folder.png'
import MegaMenu from '../../components/tools/megamenu/index'
const Topbar = () => {
  return (
    <>
      <div id="topbar">
        <section>
          <MegaMenu />
        </section>
        
        <ul>
          <li>
            <a href="#">
              <img src={Folder} alt="Folder" height="18px" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Config} alt="Config" height="18px" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Search} alt="Search" height="18px" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={User} alt="User" height="18px" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Topbar