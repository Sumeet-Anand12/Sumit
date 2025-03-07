import React from 'react'
import van from "../../../assets/Image/Banner/vanDownload.svg"
const CardBanner = () => {
    return (
        <div className='CardBanner'>
            <div className='container-fluid'>
                <div className='card-strip'>
                    <div className='row  d-flex align-items-center justify-content-between'>
                        <div className='col-img col-lg-4 d-flex justify-content-center align-items-center'>
                            <div className='van-img d-flex '>
                                <img src={van} alt="" />
                                <div className='ps-3'>
                                    <h2 className='text-bold text-uppercase'>Free Shipping</h2>
                                </div>

                            </div>
                        </div>
                        <div className='col-img col-lg-5 d-flex align-items-center'>
                            <p className='fs-6 text-bold'>Free Delivery Now On Your First Order and over $200</p>

                        </div>
                        <div className='col col-lg-3 d-flex justify-content-center align-items-center '>
                          <h1>- Only $200</h1>
                        </div>

                    </div>

                </div>
                Card banner
            </div>


        </div>
    )
}

export default CardBanner