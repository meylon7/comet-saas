import React from 'react'
import './style.css'
export const FlexTooltip = (props) => {
    const { children, flow, text } = props;
    let wrapper = `flex-tooltip ${flow}`
    return (
        <div className={wrapper}>
            <a href="#" className="trigger">{text}</a>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
