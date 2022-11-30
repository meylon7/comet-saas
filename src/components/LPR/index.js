import React from 'react'
import Layout from "../../view/Layout";
import { InfoBox, MapPanel, ExpandedCard, Card } from '../tools'
import './style.css'
export const LPRManagment = () => {
  return (
    <Layout>
      <div className="lpr-parent">
        <div className="lpr-left">
          {/* alert panel */}

          {/* end of alert panel */}
          {/* below panel */}

          {/* end of panel */}
        </div>
        <div className="lpr-right" style={{ display: 'block', float: 'right', marginRight: '100px' }}>
          <div className="lpr-tab_style_one">
            <div className="lpr-tab_wrapper">
              <input type="radio" name="lpr-eliteplaytabs" id="lpr-style_one_tab_nav_1" checked />
              <label for="lpr-style_one_tab_nav_1">Statistic</label>
              <input type="radio" name="lpr-eliteplaytabs" id="lpr-style_one_tab_nav_2" />
              <label for="lpr-style_one_tab_nav_2"> Graph</label>
              <input type="radio" name="lpr-eliteplaytabs" id="lpr-style_one_tab_nav_3" />
              <label for="lpr-style_one_tab_nav_3"> Agent Group</label>
              <div className="lpr-eliteplaytabs">
                <div className="lpr-single_tab_s_one">
                  <div className="lpr-gmap-tab">
                    <div style={{ display: 'flex', width: '480px' }}>
                      <InfoBox alert="Daily Alerts" data="15" color="blue" />
                      <InfoBox alert="Daily LP reads" data="112" color="orange" />
                    </div>
                  </div>
                </div>
                <div className="lpr-single_tab_s_one">
                  <div className="lpr-gmap-tab">
                    LP<h3 className="titular">  Rush Hours</h3>
                    <div className="bar-chart-block block">
                      <div className='grafico bar-chart'>
                        <ul className='eje-y'>
                          <li data-ejeY='100'></li>
                          <li data-ejeY='75'></li>
                          <li data-ejeY='50'></li>
                          <li data-ejeY='25'></li>
                          <li data-ejeY='0'></li>
                        </ul>
                        <ul className='eje-x'>
                          <li data-ejeX='57'><i>08:00</i></li>
                          <li data-ejeX='56'><i>12:00</i></li>
                          <li data-ejeX='25'><i>16:00</i></li>
                          <li data-ejeX='18'><i>20:00</i></li>
                          <li data-ejeX='45'><i>24:00</i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lpr-single_tab_s_one">
                  <div className="lpr-gmap-tab">
                    
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MapPanel />
        </div>
      </div>

    </Layout >
  )
}

