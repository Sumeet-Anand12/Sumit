import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import flag from "../../../assets/Image/icon/flag.jpg"

const TopStrip = () => {
    return (
        <div className='container-fluid'>
            <div className='top-strip'>
                <div className=''>
                    <p>Get up to 50% off new season styles, limited time only</p>
                </div>
                <div >
                    <ul className='nav-link'>
                        <li>
                            <button type='button'> Home Center</button>
                        </li>
                        <li>
                            <button> Order Tracking</button>
                        </li>
                        <div>
                            <div className="btn-group">
                                <button type="button" className="drop-down-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                    select Language <IoIosArrowDown />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><button className="dropdown-item" type="button"><img src={flag} alt="" />English</button></li>
                                    <li><button className="dropdown-item" type="button"><img src={flag} alt="" />Franch</button></li>
                                    <li><button className="dropdown-item" type="button"><img src={flag} alt="" />Hindi</button></li>
                                    <li><button className="dropdown-item" type="button"><img src={flag} alt="" />Urdu</button></li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="drop-down-btn " data-bs-toggle="dropdown" aria-expanded="false">
                                    select Currency <IoIosArrowDown />
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><button className="dropdown-item" type="button">USD</button></li>
                                    <li><button className="dropdown-item" type="button">EUR</button></li>
                                </ul>
                            </div>

                        </div>
                    </ul>

                </div>

            </div>
        </div>

    )
}

export default TopStrip