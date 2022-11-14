import React from "react";
import './style.css'
import Chevron from '../../../assets/images/chevron-right.svg'
export function OperatorLink(props) {
  const { text, link } = props;
  return (
    <div className="left-content">
      <img className="chevron-right" src={Chevron} alt="" />
      <div className="investigating-link">
        <p className="to-continue-investig">
          {text}&nbsp; <a href="#" className="link-inv">{link}</a>
        </p>
      </div>
    </div>
  );
}