import React from 'react'
import './style.css'
export const AddEvent = () => {
    return (
        <form className="my-form">
            <div className="container">
                <section className="h1-wrapper">
                    <div>New Event</div>
                </section>
                <div>
                    <input type="text" placeholder="Select Agents Group" />
                    <input type="text" placeholder="Select Agent" />
                </div>
                <div className="color-container">
                    <div className="box">
                        <div className="col">
                            <input type="checkbox" id="check1" />
                            <label htmlFor="check1"></label>
                        </div>
                        <div className="col">
                            <input type="checkbox" id="check2" />
                            <label htmlFor="check2"></label>
                        </div>
                        <div className="col">
                            <input type="checkbox" id="check3" />
                            <label htmlFor="check3"></label>
                        </div>

                    </div>
                </div>
                <div className="selectdiv">
                    <span>
                        <select>
                            <option> Select classification </option>
                            <option>UnclassNameified</option>
                            <option>OK</option>
                            <option>Warning</option>
                            <option>Danger</option>
                        </select>
                    </span>
                </div>
                <div className="selectdiv">
                    <span>
                        <select>
                            <option> Select Object Type  </option>
                            <option>Vehicle</option>
                            <option>Person</option>
                            <option>Both</option>
                        </select>
                    </span>
                </div>

                <textarea placeholder="Description"></textarea>
                <div>
                    <div className="btn-container">
                        <label className="switch btn-color-mode-switch">
                            <input type="checkbox" name="color_mode" id="color_mode" value="1" />
                            <label htmlFor="color_mode" data-on="Pinned" data-off="UnPinned" className="btn-color-mode-switch-inner"></label>
                        </label>
                    </div>
                </div>
                <div className="grid grid-3">
                    <input type="submit" value="Save" />
                </div>
            </div>
        </form>
    )
}

