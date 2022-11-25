import React from 'react'
import './style.css'
export const Tooltip = (props) => {
    const { children, flow, text } = props;
    return (
        <>
            <span tooltip={text} flow={flow}>{children}</span>
        </>
    )
}