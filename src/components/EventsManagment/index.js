import React from 'react'
import Layout from "../../view/Layout";
import { Tabs, OperatorLink, Notes, Tooltip, FaceRecognition, Analytic, Operator, LPR } from '../tools'
import './style.css'
export const EventsManagment = () => {
  return (
    <Layout>
      <div className="event-parent">
        <div className="left-top"> <Tabs /> <span className="add-event"><Tooltip flow="right" text="Add New Event">+ Add New Event</Tooltip></span></div>
        <div className="right-top">
          <span>Operator Notes</span>
        </div>
        <div className="left-bottom">
          <div className="event-grid">
            <div className="event-box">
              <Operator caseof="Moshe Eylon" subcase="Just small header" color="white" group="2000" agent="Meteor front office" />
            </div>
            <div className="event-box">
              <Analytic color="blue" caseof="Intrusion" subcase="Feb 18, 2022 @ 12:45:33" group="1000" agent="Office meteor" description="Last Alert : Feb 18, 2022 @ 12:45:33  Classification :  unclassified Camera Name : east camera Object Count :    6" />
            </div>
            <div className="event-box">
              <LPR color="orange" caseof="25-685-65" subcase="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
            </div>
            <div className="event-box">
              <FaceRecognition color="blue" caseof="Site Crossing" subcase="Feb 18, 2022 @ 12:45:33 " group="3000" agent="Meteor front office" />
            </div>
            <div className="event-box">
              <Analytic color="red" caseof="Intrusion" subcase="Feb 18, 2022 @ 12:45:33" group="1000" agent="Office meteor" />
            </div>
            <div className="event-box">
              <FaceRecognition color="blue" caseof="Site Crossing" subcase="Feb 18, 2022 @ 12:45:33 " group="3000" agent="Meteor front office" />
            </div>
            <div className="event-box">
              <Analytic color="orange" caseof="Intrusion" subcase="Feb 18, 2022 @ 12:45:33" group="1000" agent="Office meteor" />
            </div>
            <div className="event-box">
              <LPR color="red" caseof="25-685-65" subcase="Feb 18, 2022 @ 12:45:33" group="3000" agent="Meteor front office" />
            </div>
          </div>
        </div>
        <div className="right-bottom">
          <OperatorLink text="To continue investigating the case, " link="click here" />
          <div className="details">
            <Notes />
          </div>
        </div>
      </div>  
    </Layout>
  )
}

