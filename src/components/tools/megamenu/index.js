import React, { useState } from 'react'
import './style.css'
const MegaMenu = () => {
    const [timeFrame, setTimeFrame] = useState("")
    return (
        <div className="mega_menu-wrapper">
            <div className="mega_menu">
                <ul>

                    <li><span className="search-input"><div>
                        <input type="search" placeholder="What are you looking for?" />
                        <button>Search</button>
                    </div></span>

                    </li>
                    <li><a href="#">&#9776; Time Frame: <span>{timeFrame}</span></a>
                        <div className="sub_menu tech" id="time-frame">
                            <div className="filter-parent">
                                <div className="div1">
                                    <h3>Quick Select</h3>
                                </div>
                                <div className="div2">
                                    <select id="sel1">
                                        <option>Last</option>
                                        <option>Last</option>
                                        <option>Last</option>
                                    </select>
                                </div>
                                <div className="div3">
                                    <select id="sel2">
                                        <option>7</option>
                                        <option>15</option>
                                        <option>30</option>
                                    </select>
                                </div>
                                <div className="div4">
                                    <select id="sel1">
                                        <option>Minutes</option>
                                        <option>Last</option>
                                        <option>Last</option>
                                    </select>
                                </div>
                                <div className="div6">
                                    <button id="apply">Apply</button>
                                </div>
                                <div className="div5">
                                    <hr size="1px" />
                                    <h3>Commonly used</h3>
                                    <div className="inner-parent">
                                        <div className="inner-div1">
                                            <span onClick={() => setTimeFrame("Today")}>Today</span><br />
                                            <span onClick={() => setTimeFrame("This Week")}>This Week</span><br />
                                            <span onClick={() => setTimeFrame("Last 15 minutes")}>Last 15 minutes</span><br />
                                            <span onClick={() => setTimeFrame("Last 30 minutes")}>Last 30 minutes</span><br />
                                            <span onClick={() => setTimeFrame("Last 1 Hour")}>Last 1 Hour</span>
                                        </div>
                                        <div className="inner-div2">
                                            <span onClick={() => setTimeFrame("Last 24 Hours")}>Last 24 Hours</span><br />
                                            <span onClick={() => setTimeFrame("Last 7 Days")}>Last 7 Days</span><br />
                                            <span onClick={() => setTimeFrame("Last 30 Days")}>Last 30 Days</span><br />
                                            <span onClick={() => setTimeFrame("Last 90 Days")}>Last 90 Days</span><br />
                                            <span onClick={() => setTimeFrame("Last 1 Year")}>Last 1 Year</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="div7">
                                    <hr size="1px" />
                                    <h3>Commonly used</h3>
                                    <span>Mar 1, 2022 @ 13:50 to Mar 1, 2022 @ 14:05</span><br />
                                    <span>Feb 15, 2022 @ 09:00 to Mar 1, 2022 @ 13:50</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">&#9776; Filter:</a>
                        <div className="sub_menu" id="filter-panel">
                            <div className="filter-parent">
                                <div className="div1">
                                    <h3>Quick Select</h3>
                                    <div className="chips">
                                        <div className="chip">chip 1</div>
                                    </div>
                                    <div className="chips">
                                        <div className="chip">chip 2</div>
                                    </div>
                                    <div className="chips">
                                        <div className="chip">chip 3</div>
                                    </div>
                                    <div className="chips">
                                        <div className="chip">chip 4</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MegaMenu