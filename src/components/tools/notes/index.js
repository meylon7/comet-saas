import React from "react";
import './style.css'
import Boy from '../../../assets/images/boy-image.svg'
import Girl from '../../../assets/images/girl-image.svg'
import Paperclip from '../../../assets/images/paperclip.svg'
import Street1 from '../../../assets/images/4.jpeg'
import Street2 from '../../../assets/images/5.jpeg'
import Street3 from '../../../assets/images/6.jpeg'
import {Tooltip} from '../tooltip'
import {FlexTooltip} from '../flex-tooltip'

export function Notes() {
  //const { operatorHeader, note, spanText1, spanText2, spanText3, spanText4, spanText5, chatInfo } = props;
  const note = "Standing infront of the house and looking into the garden for 10 min, wearing blue shirt, jeans and dark glasses. ... "
  const operatorHeader = "Suspicious person"
  const classification = " unclassified"
  const group = "2000"
  const agent = "Meteor front office"
  
  return (
    <div className="right-panel-note" >
      <div className="operator-header" >
        <Tooltip flow="down" text="Suspicious person">{operatorHeader}</Tooltip>
      </div>
      <div className="note-box" >
        <p className="note" >
          {note}
        </p>
      </div>
      <p className="details-1 roboto-normal-bon-jour-13px" >
        <span className="roboto-normal-bon-jour-13px"></span>
        <span className="">Classification : </span>{classification}<br />
        <span className="span2">Group : </span>
        <span className="montserrat-normal-bon-jour-13px">{group}</span><br />
        <span className="span4">
          <FlexTooltip text={`Agent: ${agent}`}>
            Standing infront of the house<br /> and looking into the garden for 10 min, <br />wearing blue shirt, jeans and dark glasses.
          </FlexTooltip>
        </span> 
      </p>
      <div className="images-carousel" >
        <div className="carousel" >
          <Pic  />
          <Pic2  />
          <Pic3  />
          <Pic  />
        </div>
      </div>
      <ChatBox  />
      <div className="chat-text" >
        <img className="icon-paperclip" src={Paperclip} alt="paperclip" />
        <div className="chat-info" >
          
        </div>
      </div>
    </div>
  );
}


function Pic() {
  return (
    <div className="carousel-item">
      <img src={Street1} alt="" height="80px" />
    </div>
  );
}
function Pic2() {
  return (
    <div className="carousel-item">
      <img src={Street2} alt="" height="80px" />
    </div>
  );
}
function Pic3() {
  return (
    <div className="carousel-item">
      <img src={Street3} alt="" height="80px" />
    </div>
  );
}



function ChatBox() {
  const chatInfo = "I saw that guy here yestarday, please add to gray list"
  return (
    <div className="chat" >
      <ChatScroll  />
      <div className="image-container" >
        <img className="x-image" src={Boy} alt="boy-image" />
        <img className="x-image" src={Girl} alt="girl-image" />
      </div>
      <div className="textbox-container" >
        <div className="textbox" >{chatInfo}</div>
        <div className="textbox-1" >Done</div>
      </div>
    </div>
  );
}


function ChatScroll() {
  return (
    <div className="chat-scroll" >
      <div className="rectangle-43" ></div>
    </div>
  );
}


