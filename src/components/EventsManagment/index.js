import React, { useEffect, useState } from 'react'
import Layout from "../../view/Layout";
import { OperatorLink, Notes, FaceRecognition, Analytic, Operator, LPR, AddEvent, Toast, Pagination } from '../tools'
import './style.css'
import './tabs.css'
export const EventsManagment = () => {
  const [showtoast, setShowtoast] = useState("false")
  const makeToast = () => {
    console.log("start")
    setTimeout(()=> setShowtoast("true"),3000)
    setTimeout(()=> setShowtoast("false"),8000)
    console.log("end")
  }
  useEffect(() => {
    makeToast()
  },[]);
  return (
    <Layout>
      <div className="event-parent">

        <div className="left-bottom">
          <div className="tab-layout">
            {/* pinned Events */}
            <input name="nav" type="radio" className="nav home-radio" id="Pinned" defaultChecked="checked" />
            <div className="page home-page">
              <div className="page-contents">
                <div className="event-grid">
                  <div className="event-box">
                    <Operator color="#650D0B" caseof="Moshe Eylon" date="Feb 18,2022" time="12:45:33" selected="true" subcase="Just small header" classified="unclassified" group="2000" agent="Meteor front office" description="Standing infront of the house and looking into the garden for 10 min, wearing #384869 shirt, jeans and dark glasses. ... " />
                  </div>
                  <div className="event-box">
                    <Analytic color="#7C99B5" date="Feb 18, 2022" time="12:45:33" caseof="Intrusion" group="1000" agent="Office meteor" classified="Unclassified" count="6" camera="east camera" />
                  </div>
                  <div className="event-box">
                    <LPR color="#EFC862" caseof="25-685-65" subcase="Part of whitelist" date="Feb 18, 2022" time="12:45:33" relation="delivery man" seen="3" alert="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box">
                    <FaceRecognition color="#7C99B5" nameof="Dina. G" date="Feb 18, 2022" time="12:45:33" caseof="Site Crossing" subcase="Part of whitelist" gender="Female" age="23" confidence="65%" score="5" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box">
                    <Analytic color="#7C99B5" date="Feb 18, 2022" time="12:45:33" caseof="Intrusion" group="1000" agent="Office meteor" classified="Unclassified" count="6" camera="east camera" />
                  </div>
                  <div className="event-box">
                    <FaceRecognition color="#EFC862" nameof="Dina. G" date="Feb 18, 2022" time="12:45:33" caseof="Site Crossing" subcase="Part of whitelist" gender="Female" age="23" confidence="65%" score="5" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box">
                    <Analytic color="#650D0B" date="Feb 18, 2022" time="12:45:33" caseof="Intrusion" group="1000" agent="Office meteor" classified="Unclassified" count="6" camera="east camera" />
                  </div>
                  <div className="event-box">
                    <LPR color="#EFC862" caseof="25-685-65" subcase="Part of whitelist" date="Feb 18, 2022" time="12:45:33" relation="delivery man" seen="3" alert="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box">
                    <Operator caseof="Moshe Eylon" date="Feb 18,2022" time="12:45:33" subcase="Just small header" classified="unclassified" color="#650D0B" group="2000" agent="Meteor front office" description="Standing infront of the house and looking into the garden for 10 min, wearing #384869 shirt, jeans and dark glasses. ... " />
                  </div>
                  <div style={{width:'98%',float:'right', marginTop:'-35px'}}><Pagination /></div>
                </div>
              </div>
            </div>
            <label className="nav" htmlFor="Pinned">
              <span>
                Pinned Events
              </span>
            </label>
            {/* Live Feed Events */}
            <input name="nav" type="radio" className="about-radio" id="LiveFeed" />
            <div className="page about-page">
              <div className="page-contents">
                here will be Live Feed Events
              </div>
            </div>
            <label className="nav" htmlFor="LiveFeed">
              <span>
                Live Feed Events
              </span>
            </label>

            {/* Live Feed Events */}

            <input name="nav" type="radio" className="contact-radio" id="newEvent" />
            <div className="page contact-page">
              <div className="page-contents">
                <AddEvent />
              </div>
            </div>
            <label className="nav addEvent" htmlFor="newEvent">
              <span>
                +
              </span>

            </label>
          </div>

        </div>
        <div className="right-bottom">
          <div className="right-top">
              <div>Operator Notes</div>
              
          </div><br />
          <OperatorLink text="To continue investigating the case, " link="click here" />
          <div className="details">
            <Notes />
          </div>
        </div>
      </div>
      <Toast message='toast test message' show={showtoast} />
    </Layout>
  )
}

