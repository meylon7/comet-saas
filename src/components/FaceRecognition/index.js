import React from 'react'
import Layout from "../../view/Layout";
import { TableRow, Tabs, OperatorLink, Notes } from '../tools'
import './style.css'
export const FaceManagment = () => {
  return (
    <Layout>
      <div className="event-parent">
        <div className="left-top"> <Tabs /> <span className="add-event-face">+ Add New Event</span></div>
        <div className="right-top">
          <span>Operator Notes</span>
          
        </div>
        <div className="left-bottom">
          <TableRow alert="red" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
          <TableRow alert="blue" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
          <TableRow alert="orange" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
          <TableRow alert="blue" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
          <TableRow alert="blue" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
          <TableRow alert="orange" dateof="6h 30min Feb 18, 2022"
            description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ... "
            count="3" eventname="Angelina Jolie" subname="Part of Whitelist" />
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

