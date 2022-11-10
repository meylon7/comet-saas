import React, { useState } from 'react'

const Rightbar = () => {
    const [isToggle, setToggle] = useState("button");
    const [isMoveLeft, setMoveLeft] = useState("right-sidebar");
    const toggleSidebar = (state) => {
        if(state === "open"){
            setToggle("button active")
            setMoveLeft("right-sidebar")
        }
        if(state === "close"){
            setMoveLeft("right-sidebar move-to-left")
            setToggle("button")
        }
      }
    
    return (
        <>
            <div className="nav-right visible-xs">
                <div className={isToggle} id="btn" onClick={() => toggleSidebar('open')}>
                    <div className="bar top"></div>
                    <div className="bar middle"></div>
                    <div className="bar bottom"></div>
                </div>
            </div>
            <div className="right-main">
                <nav>
                    <div className="nav-right hidden-xs">
                        <div className="button" id="btn" onClick={() => toggleSidebar('close')}>
                            <div className="bar top"></div>
                            <div className="bar middle"></div>
                            <div className="bar bottom"></div>
                        </div>
                    </div>
                </nav>
                <a href="https://codepen.io/tonkec/" className="ua" target="_blank">
                    <i className="fa fa-user"></i>
                </a>
            </div>
            <div className={isMoveLeft}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium
                    laboriosam sit quos rem molestias illo, nisi labore deleniti officiis
                    doloremque perferendis laborum cupiditate totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium
                    laboriosam sit quos rem molestias illo, nisi labore deleniti officiis
                    doloremque perferendis laborum cupiditate totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, quibusdam ipsum dicta commodi, ipsa praesentium
                    laboriosam sit quos rem molestias illo, nisi labore deleniti officiis
                    doloremque perferendis laborum cupiditate totam.
                </p>
            </div>
        </>
    )
}

export default Rightbar