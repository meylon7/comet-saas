import React from 'react'
import Layout from "../../view/Layout";
import { OperatorLink, Notes, EventBox, Pagination } from '../tools'
import './style.css'
export const AgentsManagment = () => {

  return (
    <Layout>
      <div className="event-parent">
        <div className="left-bottom">
          <div className="tab-layout">
            <input name="nav" type="radio" className="nav home-radio" id="Pinned" defaultChecked="checked" />
            <div className="page home-page">
              <div className="page-contents">
                <div className="event-grid">
                  <div className="event-box-agent">
                    <EventBox eventtype="analytic"  date="Feb 18, 2022" time="12:45:33" caseof="Intrusion" group="1000" agent="Office meteor" classified="Unclassified" count="6" camera="east camera" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="operator" color="red" caseof="Moshe Eylon" date="Feb 18,2022" time="12:45:33" selected="true" subcase="Just small header" classified="unclassified" group="2000" agent="Meteor front office" description="Standing infront of the house and looking into the garden for 10 min, wearing #384869 shirt, jeans and dark glasses. ... " />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="lpr"  caseof="25-685-65" subcase="Part of whitelist" date="Feb 18, 2022" time="12:45:33" relation="delivery man" seen="3" alert="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="facerecognition" color="orange" nameof="Dina. G" date="Feb 18, 2022" time="12:45:33" caseof="Site Crossing" subcase="Part of whitelist" gender="Female" age="23" confidence="65%" score="5" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="analytic" color="orange"  date="Feb 18, 2022" time="12:45:33" caseof="Intrusion" group="1000" agent="Office meteor" classified="Unclassified" count="6" camera="east camera" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="lpr" caseof="25-685-65" color="red" subcase="Part of whitelist" date="Feb 18, 2022" time="12:45:33" relation="delivery man" seen="3" alert="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="lpr" caseof="25-685-65" color="blue" subcase="Part of whitelist" date="Feb 18, 2022" time="12:45:33" relation="delivery man" seen="3" alert="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="facerecognition" color="red" nameof="Dina. G" date="Feb 18, 2022" time="12:45:33" caseof="Site Crossing" subcase="Part of whitelist" gender="Female" age="23" confidence="65%" score="5" group="3000" agent="Meteor front office" />
                  </div>
                  <div className="event-box-agent">
                    <EventBox eventtype="operator" color="blue" caseof="Moshe Eylon" date="Feb 18,2022" time="12:45:33" subcase="Just small header" classified="unclassified" group="2000" agent="Meteor front office" description="Standing infront of the house and looking into the garden for 10 min, wearing #384869 shirt, jeans and dark glasses. ... " />
                  </div>
                  <div style={{ width: '98%', float: 'right', marginTop: '-35px' }}><Pagination /></div>
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
                <h1> just text here </h1>
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
    </Layout>
  )
}
