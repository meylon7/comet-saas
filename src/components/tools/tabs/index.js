import React from 'react'
import './style.css'
export const Tabs = () => {
  return (
    <div className="tab-container">
      <input type="radio" id="tab1" name="tab"  onChange={()=> "just note"} />
      <label htmlFor="tab1">Pinned Events</label>
      <input type="radio" id="tab2" name="tab" />
      <label htmlFor="tab2"> Live Feed Events</label>
      <input type="radio" id="tab3" name="tab" />
      <label htmlFor="tab3" className='plus-sign'>+</label>
      <div className="line"></div>
    </div>
  )
}
