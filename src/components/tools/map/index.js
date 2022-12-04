import React from 'react'
import './style.css'
export const MapPanel = () => {
    return (
        <div className="tab_style_one">
            <div className="tab_wrapper">
                <input type="radio" name="eliteplaytabs" id="style_one_tab_nav_1" defaultChecked="checked" />
                <label for="style_one_tab_nav_1">MAP</label>
                <input type="radio" name="eliteplaytabs" id="style_one_tab_nav_2" />
                <label for="style_one_tab_nav_2"> Map 2</label>
                <div className="eliteplaytabs">
                    <div className="single_tab_s_one">
                        <div className="gmap-tab">
                            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                    <div className="single_tab_s_one">
                        <div className="gmap-tab">
                            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}





