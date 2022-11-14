import React from "react";
import './style.css'

export default App;

function Notes(props) {
  const { operatorHeader, note, spanText1, spanText2, spanText3, spanText4, spanText5, chatInfo } = props;

  return (
    <div className="details">
      <div className="operator-header">
        {operatorHeader}
      </div>
      <div className="overlap-group1">
        <p className="note">
          {note}
        </p>
      </div>
      <p className="details-1roboto-normal-bon-jour-13px">
        <span className="roboto-normal-bon-jour-13px">{spanText1}</span>
        <span className="montserrat-normal-bon-jour-13px">{spanText2}</span>
        <span className="span2">{spanText3}</span>
        <span className="montserrat-normal-bon-jour-13px">{spanText4}</span>
        <span className="span4">{spanText5}</span>
      </p>
      <div className="images-carousel">
        <div className="carousel">
          <Pic />
          <Pic />
          <Pic />
          <Pic2 />
        </div>
      </div>
      <Group48095430 />
      <div className="overlap-group">
        <img className="ico-pin" src="vector-2.svg" alt="ico-pin" />
        <div className="chat-info">
          {chatInfo}
        </div>
      </div>
    </div>
  );
}

function Pic() {
  return <div className="carousel-item"></div>;
}

function Pic2() {
  return <div className="pic"></div>;
}

function Group48095430() {
  return (
    <div className="chat">
      <Group64 />
      <div className="image-container">
        <img className="x-image" src="ellipse-10.png" alt="boy-image" />
        <img className="x-image" src="ellipse-7.png" alt="girl-image" />
      </div>
      <div className="textbox-container">
        <div className="textbox"></div>
        <div className="textbox-1"></div>
      </div>
    </div>
  );
}

function Group64() {
  return (
    <div className="chat-scroll">
      <div className="rectangle-43"></div>
    </div>
  );
}

const xDetails4Data = {
  operatorHeader: "Suspicious Person",
  note: "Standing infront of the house and looking into the garden for 10 min, wearing blue shirt, jeans and dark glasses. ...",
  spanText1: (
    <React.Fragment>
      Classification : unclassified
      <br />
    </React.Fragment>
  ),
  spanText2: "Group: ",
  spanText3: "2000",
  spanText4: "      Agent: ",
  spanText5: "Meteor front office",
  chatInfo: "Type Here",
};