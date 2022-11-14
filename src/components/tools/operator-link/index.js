import React from "react";
import './style.css' 
//To continue investigating the case, click here
function OperatorLink(props) {
    const { text, link } = props;
  return (
    <div className="left-content">
      <img className="chevron-right" src="chevron-right.svg" alt="chevron-right" />
      <div className="investigating-link">
        <p className="to-continue-investig">
          {text} {link}
        </p>
      </div>
    </div>
  );
}

export default OperatorLink;