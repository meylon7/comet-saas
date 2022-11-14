import React from "react";
import './style.css'
import Mail from './images/Mail.svg'
import UserPhoto from './images/user-photo.svg'
import Messenger from './images/Messenger.svg'
import Telegram from './images/Telegram.svg'
import VideoLink from './images/VideoLink.svg'
import Clock from './images/Clock.svg'
export function TableRow(props) {
    const { dateof, description, count, eventname, subname, alert } = props;
    //6h 30min Feb 18, 2022
    //It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. ...
    return (
        <div className="event-frame">
                <div className="overlap-group1roboto-normal-bon-jour-13px">
                    <div className="container-l-color" style={{borderLeft:`3px solid ${alert}`}}></div>
                    <div className="indicator"></div>
                    <div className="trailing-icon"></div>
                    <img className="user-photo" src={UserPhoto} alt="user-photo" />
                    <img className="mail" src={Mail} alt="Mail" />
                    <img className="messenger" src={Messenger} alt="Messenger" />
                    <img className="telegram" src={Telegram} alt="Telegram" />
                    <div className="user-details">
                        <div className="event-name">
                            {eventname}
                        </div>
                        <div className="sub-event-nameroboto-normal-bon-jour-13px">
                            {subname}
                        </div>
                    </div>
                    <div className="time-text">
                    <img className="clock" src={Clock} alt="clock" /> &nbsp;&nbsp;<span>{dateof}</span>
                    </div>
                    <p className="event-description">
                        {description}
                    </p>
                    <div className="counter-number">
                        {count}
                    </div>
                </div>
                <img className="video-link" src={VideoLink} alt="Video" />
        </div>
    );
}


