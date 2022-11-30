import React from 'react'
import styled from "@emotion/styled";
import Pin from '../../../../assets/images/pin.svg'
import Counter from '../../../../assets/images/counter.svg'
import Mail from '../../../../assets/images/Mail.svg'
import Messenger from '../../../../assets/images/Messenger.svg'
import VideoLink from '../../../../assets/images/VideoLink.svg'
import LPRPic from '../../../../assets/images/event-type.svg'
import LprCar from '../../../../assets/images/event-car.svg'
import './style.css'
export const LPR = (props) => {
    const { caseof, subcase, date, time, relation, alert, seen, color, group, agent, selected } = props;
    let selectColor = ''
    if (selected === "true") {
        selectColor = `box-shadow: 0px 22px 21px -6px rgba(255,255,255,0.3);`
    }
    const Ticket = styled.div`
            width: 330px;
            height: 180px;
            position: relative;
            transition: all 300ms cubic- bezier(0.03, 0.98, 0.53, 0.99) 0s;
            background: ${color};
            ${selectColor}
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
        background: #111;
        border-radius: 15px;
        display: flex;
    `
    const Left = styled.div`
        width: 87%;
        padding-left: 35px;
        border-right: 2px dotted #f2f2f2;
        height: 99%;
        padding-top: 10px;
    `
    const Right = styled.div`
        width: 13%;
        height: 100%;
        text-align: center;
        padding-top: 10px;
        padding-right: 8px;
    `


    return (
        <>
            <img alt="pin" src={LPRPic} style={{ position: 'relative', top: '118px', right: "30px", zIndex: "11", width: "50px" }} />
            <Ticket>
                <Wrapper>
                    <Left>
                        <div className="lpr">
                            <div className="head">
                                <section style={{ display: "flex", width: "100%" }}>
                                    <div style={{ width: "65%" }}>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', lineHeight: '13px' }}>{caseof}</span>
                                        <i style={{ fontSize: '12px' }} className="fas fa-user-alt"></i>&nbsp;&nbsp;<span style={{ fontSize: '12px', marginTop: '-10px' }}>{subcase}</span>
                                    </div>
                                    <div style={{ width: "35%", float: "left", textAlign: "left", display: 'block' }}>
                                        <span style={{ fontSize: '10px', display: 'block' }}><i style={{ fontSize: '12px' }} className="far fa-clock"></i>&nbsp;&nbsp;{date}</span>
                                        <span style={{ fontSize: '10px', paddingLeft: '17px' }}>{time}</span>
                                    </div>
                                </section>
                            </div>
                            <div className='description'>
                                <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Relation: {relation}</span>
                                <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Seen count: {seen}</span>
                                <span style={{ fontSize: '11px', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Last alert: {alert}</span>
                            </div>
                            <div className="group">
                                <section style={{ display: "flex", width: "98%" }}>
                                    <div style={{ width: "65%" }}>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}> {group}</span>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}> {agent}</span>
                                    </div>
                                    <div style={{ float: "left", textAlign: "left", width: "35%", marginTop: "5px" }}>
                                        <span style={{}}><img alt="Suspect" src={LprCar} /></span>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </Left>
                    <Right>
                        <span style={{ cursor: "pointer" }}><img alt="pin" src={Pin} /></span><br />
                        <span style={{ cursor: "pointer" }}><img alt="Counter" src={Counter} /></span>
                        <div style={{ paddingTop: '45px' }}>
                            <section className="icon-right-menu" style={{ cursor: "pointer", postion: 'relative' }}><img alt="Mail" src={Mail} /></section>
                            <section style={{ cursor: "pointer", postion: 'relative', marginTop: '-6px' }}><img alt="Messenger" src={Messenger} /></section>
                            <section style={{ cursor: "pointer", postion: 'relative', marginTop: '-6px' }}><img alt="VideoLink" src={VideoLink} /></section>
                        </div>
                    </Right>
                </Wrapper>
            </Ticket>
        </>
    )
}
