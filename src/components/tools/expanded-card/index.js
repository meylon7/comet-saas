import React from 'react'
import './style.css'
export const ExpandedCard = (props) => {
    const {children} = props
    return (
        <>
            <ul id="card-wrapper">
                {children}
            </ul>
        </>
    )
}
