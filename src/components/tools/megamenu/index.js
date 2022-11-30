import React, { useState } from 'react'
import './style.css'
const MegaMenu = () => {
    const [timeFrame, setTimeFrame] = useState("")
    return (
        <div className="mega_menu-wrapper">
            <div className="mega_menu">
                <ul>

                    <li>
                        <div id="searchbar">
                            <input id="search_input" type="text" name="" placeholder="Search..." />
                        </div>
                    </li>
                    <li><a href="#">&#9776; Time Frame: <span>{timeFrame}</span></a>
                        <div className="sub_menu tech" id="time-frame">
                            <div className="frame-parent">
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
                                <div className="div01 "><h3>Quick Filter</h3> </div>
                                <div className="div02 "> </div>
                                <div className="div03 "> </div>
                                <div className="div04"> <hr size="1px" />Switch to advanced filters</div>
                                <div className="div05 btn" >1000</div>
                                <div className="div06 btn"> 2000</div>
                                <div className="div07 btn"> 3000</div>
                                <div className="div08 btn"> 4000</div>
                                <div className="div09 btn"> 5000</div>
                                <div className="div010 btn"> Appolo</div>
                                <div className="div011 btn"> Proffesor</div>
                                <div className="div012 btn"> Apachi</div>
                                <div className="div013 btn"> Pagasus</div>
                                <div className="div014 btn"> Comet</div>
                                <div className="div015 btn"> Yellow</div>
                                <div className="div016 btn"> White</div>
                                <div className="div017 btn"> Black</div>
                                <div className="div018 btn"> Gray</div>
                                <div className="div019 btn"> Green</div>
                                <div className="div020 btn"> &#8249;10</div>
                                <div className="div021 btn"> &#8250;50</div>
                                <div className="div022 btn"> &#8250;100</div>
                                <div className="div023 btn"> &#8249;100</div>
                                <div className="div024 btn"> &#8250;500</div>
                                <div className="div025 btn"> </div>
                                <div className="div026 btn"> </div>
                                <div className="div027 btn"> </div>
                                <div className="div028 btn"> </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MegaMenu