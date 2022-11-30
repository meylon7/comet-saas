import React from 'react'
import './style.css';
export const Toast = (props) => {
    const { message, show } = props;
    console.log("1.:", message, " 2.:", show)
    let showToast = `toast`
    if (show==="true") {
        showToast = `toast show`
    }
    console.log(showToast)
    return (
        <div className={showToast}>{message}</div>
    )
}



