import React from 'react'
import styled from "@emotion/styled";
import Pin from '../../../assets/images/pin.svg'
import Counter from '../../../assets/images/counter.svg'
import Mail from '../../../assets/images/Mail.svg'
import Messenger from '../../../assets/images/Messenger.svg'
import Operator from '../../../assets/images/operator.svg'
import VideoLink from '../../../assets/images/VideoLink.svg'
import Analytic from '../../../assets/images/body.svg'
import FaceRecognition from '../../../assets/images/face-rec.svg'
import LPR from '../../../assets/images/event-type.svg'
export const EventBox = (props) => {
    const { eventtype,caseof, subcase, dateof, description, color, group, agent } = props;
    
    const Ticket = styled.div`
            width: 330px;
            height: 180px;
            position: relative;
            transition: all 300ms cubic- bezier(0.03, 0.98, 0.53, 0.99) 0s;
            background: ${color};
            border-radius: 15px;
            padding: 4px;
            z - index: 0;
            &:before,:after{
                content: '';
                display: block;
                position: absolute;
                top: 53px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                z-index: 10;
                background-color: #161618;
            }
            &:after{
                border: 5px solid ${color};
                right: -44px;
                clip-path: circle(55% at 0 50%);
            }
            &:before{
                border: 5px solid ${color};
                left: -44px;
                clip-path: circle(55% at 100% 50%);
            }
    `
    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        background: #313132;
        border-radius: 15px;
        display: flex;
    `
    const Left = styled.div`
        width: 85%;
        padding-left: 35px;
        border-right: 2px dotted #f2f2f2;
        height: 99%;
        padding-top: 10px;
    `
    const Right = styled.div`
        width: 15%;
        height: 100%;
        text-align: center;
        padding-top: 10px;
        padding-right: 8px;
    `
    let imagetype = Operator

    if(eventtype==='operator') imagetype = Operator;
    if(eventtype==='Analytic') imagetype = Analytic;
    if(eventtype==='FaceRecognition') imagetype = FaceRecognition;
    if(eventtype==='LPR') imagetype = LPR;
    
    return (
        <>
            <img alt="pin" src={imagetype} style={{ position: 'relative', top: '121px', right: "30px", zIndex: "11", width: "50px" }} />
            <Ticket>
                <Wrapper>
                    <Left>
                        <span style={{ fontSize: '13px', fontWeight: 'bold', display: 'block',lineHeight:'8px' }}>{caseof}</span>
                        <span style={{ fontSize: '12px', marginTop: '-10px' }}>{subcase}</span>
                        <hr size="1px" />
                        <div style={{fontSize: '11px'}}>{description}</div>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block',lineHeight:'8px', paddingTop:'10px' }}>Group: {group}</span>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block',lineHeight:'8px', paddingTop:'10px' }}>Agent: {agent}</span>
                    </Left>
                    <Right>
                        <span style={{ cursor: "pointer" }}><img alt="pin" src={Pin} /></span><br />
                        <span style={{ cursor: "pointer" }}><img alt="Counter" src={Counter} /></span>
                        <div style={{ paddingTop: '30px' }}>
                            <span style={{ cursor: "pointer", display: 'block' }}><img alt="Mail" src={Mail} /></span>
                            <span style={{ cursor: "pointer", display: 'block' }}><img alt="Messenger" src={Messenger} /></span>
                            <span style={{ cursor: "pointer" }}><img alt="VideoLink" src={VideoLink} /></span>
                        </div>
                    </Right>
                </Wrapper>
            </Ticket>
        </>
    )
}
