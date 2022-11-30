import React from 'react'
import styled from "@emotion/styled";
import Pin from '../../../../assets/images/pin.svg'
import Counter from '../../../../assets/images/counter.svg'
import Mail from '../../../../assets/images/Mail.svg'
import Messenger from '../../../../assets/images/Messenger.svg'
import VideoLink from '../../../../assets/images/VideoLink.svg'
import AnalyticPic from '../../../../assets/images/body.svg'
import Suspect from '../../../../assets/images/suspect.svg'
import './style.css'
export const Analytic = (props) => {
    const { caseof, subcase, date, time, color, group, agent, count, camera, classified, selected } = props;
    let selectBorder = ''
    if(selected === "true"){
        selectBorder='2px double #efc862'
    }
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
        width: 87%;
        padding-left: 35px;
        border-right: 2px dotted #f2f2f2;
        height: 95%;
        padding-top: 10px;
        fontSize:11px;
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
            <img alt="pin" src={AnalyticPic} style={{ position: 'relative', top: '118px', right: "30px", zIndex: "11", width: "50px" }} />
            <Ticket>
                <Wrapper>
                    <Left>
                        <div className="analytic">
                            <div className="head">
                                <section style={{ display: "flex", width: "100%" }}>
                                    <div style={{ width: "70%" }}>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', lineHeight: '8px' }}>{caseof}</span>
                                        <span style={{ fontSize: '12px', marginTop: '-10px' }}>{subcase}</span>
                                    </div>
                                    <div style={{ float: "right", textAlign: "right",width: "30%", marginRight:"7px" }}>
                                        <span style={{ fontSize: '10px', display: 'block', lineHeight: '8px' }}>{date}</span>
                                        <span style={{ fontSize: '10px', marginTop: '-10px' }}>{time}</span>
                                    </div>
                                </section>
                            </div>
                            <div className='description'>
                                <section style={{ display: "flex", width: "98%" }}>
                                    <div style={{ width: "65%" }}>
                                        <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Classification: {classified}</span>
                                        <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Camera: {camera}</span>
                                        <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}>Object Count: {count}</span>
                                    </div>
                                    <div style={{ float: "right", textAlign: "right", width: "35%" }}>
                                        <span><img alt="Suspect" src={Suspect} /></span>
                                    </div>
                                </section>
                            </div>
                            <div className="group">

                                <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}> {group}</span>
                                <span style={{ fontSize: '11px', fontWeight: 'bold', display: 'block', lineHeight: '8px', paddingTop: '10px' }}> {agent}</span>
                            </div>
                        </div>
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
