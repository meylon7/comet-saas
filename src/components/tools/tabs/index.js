import React from 'react'
import './style.css'
export const Tabs = () => {
  return (
    <div className="tab-container">
      <input type="radio" id="tab1" name="tab" checked onChange={()=> "just note"} />
      <label htmlFor="tab1"><i className="fa fa-code"></i> Pinned Events</label>
      <input type="radio" id="tab2" name="tab" />
      <label htmlFor="tab2"><i className="fa fa-history"></i> Live Feed Events</label>
      <input type="radio" id="tab3" name="tab" />
      <label htmlFor="tab3"><i className="fa fa-history"></i>+</label>
      <div className="line"></div>
    </div>
  )
}
