import React from "react";
import './style.css'
import Boy from '../../../assets/images/boy-image.svg'
import Girl from '../../../assets/images/girl-image.svg'
import Paperclip from '../../../assets/images/paperclip.svg'
import Street1 from '../../../assets/images/4.jpeg'
import Street2 from '../../../assets/images/5.jpeg'
import Street3 from '../../../assets/images/6.jpeg'
import { Tooltip } from '../tooltip'
import { FlexTooltip } from '../flex-tooltip'

export function Notes() {
  //const { operatorHeader, note, spanText1, spanText2, spanText3, spanText4, spanText5, chatInfo } = props;
  const note = "Standing infront of the house and looking into the garden for 10 min, wearing blue shirt, jeans and dark glasses. ... "
  const operatorHeader = "Suspicious person"
  const classification = " unclassified"
  const group = "2000"
  const agent = "Meteor front office"

  return (
    <div className="right-panel-note" >
      <div style={{ display: 'flex', width: '95%' }}>
        <div className="operator-header">
          <Tooltip flow="down" text="Suspicious person">{operatorHeader}</Tooltip>
        </div>
        <div style={{ float: 'right',width:'42%',marginTop:'5px' }}>
          <i style={{ fontSize: '14px' }} className="far fa-clock"></i>&nbsp;&nbsp;27 11 2022 17:45:21
        </div>
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
        <span style={{fontWeight:'bold',fontSize:'16px'}}>{group}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="span2">Agent : </span>&nbsp;&nbsp;
        <span style={{fontWeight:'bold',fontSize:'16px'}}>{agent}</span>
       
      </p>
      <div className="images-carousel" >
        <div className="carousel" >
          <Pic />
          <Pic2 />
          <Pic3 />
          <Pic />
        </div>
      </div>
      <ChatBox />
      <div className="chat-text" >
        <img className="icon-paperclip" src={Paperclip} alt="paperclip" />
        <div className="chat-info" >
          Type Here
        </div>
      </div>
    </div>
  );
}


function Pic() {
  return (
    <div className="carousel-item">
      <img src={Street1} alt="" height="80px" style={{border:'2px inset #474747'}} />
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
      <ChatScroll />
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
      <div className="rectangle-43"></div>
    </div>
  );
}


