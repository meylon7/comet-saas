import React from 'react'
import styled from "@emotion/styled";
import Pin from '../../../assets/images/pin.svg'
import Mail from '../../../assets/images/Mail.svg'
import Messenger from '../../../assets/images/Messenger.svg'
import VideoLink from '../../../assets/images/VideoLink.svg'
import AnalyticPic from '../../../assets/images/sensor.png'
import OperatorPic from '../../../assets/images/operator.png'
import FaceRecognitionPic from '../../../assets/images/face-detection.png'
import LPRPic from '../../../assets/images/licence-plate.png'
import LprCar from '../../../assets/images/event-car.svg'
import AnalyticSuspect from '../../../assets/images/analytic.svg'
import Suspect from '../../../assets/images/suspect.svg'
import Car from '../../../assets/images/Car.svg'
import Man from '../../../assets/images/man.svg'
import './style.css'
export const EventBox = (props) => {
    const { eventtype, caseof, subcase, date, time, description, color, group, agent, score, nameof, count, camera, classified, confidence, gender, age, relation, alert, seen, selected } = props;
    let eventColor = '#8d99ae'
    let operatorIcons = 'none'
    let boxImage = Suspect
    let showDescription = 'none'
    let showAnalytic = 'none'
    let showFace = 'none'
    let showLpr = 'none'
    let boxShadow = ''
    if (selected === "true") {
        //cssClass = "thick-check-mark"
        boxShadow = "box-shadow: 0px 5px 10px 0px rgba(0,255,255,0.7)"
    }
    if (color === 'orange') eventColor = '#ca6702'
    if (color === 'red') eventColor = '#bc4749'
    if (color === 'blue') eventColor = '#8d99ae'
    const CardWrap = styled.div`
        width: 22em;
        margin-right: 20px;
        margin-top: 20px;
        color: #f2f2f2;
        font-family: sans-serif;
    `
    const CardLeft = styled.div`
        background: linear-gradient(to bottom,  ${eventColor} 0%,  ${eventColor} 26%, #313132 26%, #313132 100%);
        height: 12em;
        float: left;
        position: relative;
        padding: 1em;
        margin-top:10px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 16em;
        ${boxShadow}
    `
    const CardRight = styled.div`
        background: linear-gradient(to bottom,  ${eventColor} 0%,  ${eventColor} 26%, #313132 26%, #313132 100%);
        height: 12em;
        float: left;
        position: relative;
        padding: 5px;
        margin-top:10px;
        width: 5.5em;
        border-left: .18em dashed #fff;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        &:before,
        &:after {
            content: "";
            position: absolute;
            display: block;
            width: .9em;
            height: .9em;
            background: #161618;
            border-radius: 50%;
            left: -.5em;
        }
        &:before {
            top: -.4em;
        }
        &:after {
            bottom: -.4em;
        }
    `
    let imagetype = OperatorPic

    if (eventtype.toLowerCase() === 'operator') {
        imagetype = OperatorPic;
        operatorIcons = ''
        showDescription = ''
    }
    if (eventtype.toLowerCase() === 'analytic') {
        imagetype = AnalyticPic;
        boxImage = AnalyticSuspect;
        showAnalytic = ''
    }
    if (eventtype.toLowerCase() === 'facerecognition') {
        imagetype = FaceRecognitionPic;
        boxImage = Suspect;
        showFace = ''
    }
    if (eventtype.toLowerCase() === 'lpr') {
        imagetype = LPRPic;
        boxImage = LprCar;
        showLpr = ''
    }

    return (
        <>
            <CardWrap>
                <CardLeft>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '65%' }}>
                            <span className="caseof">{caseof}</span>
                            <span className="subcase">{subcase}</span>
                        </div>
                        <div style={{ width: '35%', float: 'right' }} className="pin-icon">

                            <span style={{ fontSize: '10px', display: 'block' }}><i style={{ fontSize: '12px' }} className="far fa-clock"></i>&nbsp;&nbsp;{date}</span>
                            <span style={{ fontSize: '10px', paddingLeft: '17px' }}>{time}</span>
                        </div>

                    </div>
                    <div style={{ display: showDescription }}>
                        <div className="description">{description}</div>
                    </div>
                    <div style={{ display: showLpr, marginTop: '.5em' }}>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Relation: {relation}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Seen count: {seen}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Last alert: {alert}</span>
                    </div>
                    <div style={{ display: showFace, marginTop: '.5em' }}>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Confidence: {confidence}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Score: {score}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Gender: {gender}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Age est: {age}</span>
                    </div>
                    <div style={{ display: showAnalytic, marginTop: '.5em' }}>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Classification: {classified}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Camera: {camera}</span>
                        <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Object Count: {count}</span>
                    </div>
                    <div className="info-body">
                        <span className="group-agent">Group: {group}</span>
                        <span className="group-agent">Agent: {agent}</span>
                    </div>

                    <div className="operator-icons" style={{ display: operatorIcons }}>
                        <span style={{ cursor: "pointer", margin: '5px' }}><i style={{ fontSize: '20px' }} className="fas fa-male"></i></span>
                        <span style={{ cursor: "pointer", margin: '5px', display: 'block' }}><i style={{ fontSize: '20px' }} className="fas fa-car"></i></span>
                    </div>
                    {/* <div className={cssClass}></div> */}
                </CardLeft>
                <CardRight>
                    <div><img alt={imagetype} src={imagetype} className="event-pic" /></div>
                    <div className="right-section">
                        <div style={{ display: 'flex', float: 'right' }}>
                            <div class="numberCircle">2</div>
                            <span><img alt="pin" src={Pin} /></span>
                        </div>
                        <div>
                            <span><i className="far fa-clone copy"></i>
                                <img alt="Suspect" style={{ marginLeft: '-4px', marginTop: '9px' }} src={boxImage} /></span>
                        </div>
                    </div>
                    <footer style={{ display: "flex", position: 'relative', paddingLeft: '6px' }}>
                        <span className="small-pic"><img alt="Mail" src={Mail} /></span>
                        <span className="small-pic"><img alt="Messenger" src={Messenger} /></span>
                        <span className="small-pic"><img alt="VideoLink" src={VideoLink} /></span>
                    </footer>
                </CardRight>
            </CardWrap>
        </>
    )
}
