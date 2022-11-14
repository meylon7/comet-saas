import React from "react";
import './style.css'

export default function TableRow(props) {
    const { dateof, description, count, eventname, subname } = props;
    //6h 30min Feb 18, 2022
    //It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. ...
    return (
        <div className="event-frame">
            <div className="overlap-group">
                <div className="overlap-group1roboto-normal-bon-jour-13px">
                    <div className="container-l-color"></div>
                    <div className="indicator"></div>
                    <div className="trailing-icon"></div>
                    <img className="user-photo" src="./images/user-photo.svg" alt="user-photo" />
                    <img className="mail" src="./images/Mail.svg" alt="Mail" />
                    <img className="messenger" src="./images/Messenger.svg" alt="Messenger" />
                    <img className="telegram" src="./images/Telegram.svg" alt="Telegram" />
                    <div className="user-details">
                        <div className="event-name">
                            {eventname}
                        </div>
                        <div className="sub-event-nameroboto-normal-bon-jour-13px">
                            {subname}
                        </div>
                    </div>
                    <div className="time-text">
                        {dateof}
                    </div>
                    <p className="event-description">
                        {description}
                    </p>
                    <div className="overlap-group">
                        <div className="counter-number">
                            {count}
                        </div>
                    </div>
                </div>
                <img className="clock" src="./images/Clock.svg" alt="Clock" />
                <img className="video-link" src="./images/VideoLink.svg" alt="Video" />
            </div>
        </div>
    );
}


