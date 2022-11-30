import React from 'react'
import './card.css'
export const Card = (props) => {
    const {children, header} = props
    return (
        <li className="card expanded">
            <span className="text-value">{children}</span>
            <div className="vertical-text">{header}</div>
        </li>
    )
}
