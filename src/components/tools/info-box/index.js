import React from 'react'
import './style.css'
import Pie from '../../../assets/images/pie-chart.svg'
export const InfoBox = (props) => {
    const {alert, color, data} = props
    let borderColor = 'stats-container blue'
    if(color !== 'blue'){
        borderColor = `stats-container ${color}`
    }
    return (
        <div class={borderColor}>
            <img src={Pie} alt="" id='icon' />
            <div class="counter" data-ceil={data}>{data}</div>
            <h4>{alert}</h4>
        </div>
    )
}
