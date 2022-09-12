import React from 'react'
import Saleslide from './Saleslide'
import { Link } from "react-router-dom";



const Salecoll = () => {

  
  return (
    <div className='coll-sale container my-5'>
      <div className="expQbg">
        <div className="bg-box bg-box3"></div>
        <div className="bg-box bg-box4"></div>
      </div>

      <div className="d-flex justify-content-between align-items-center px-5 py-5">
        <div className="sale-imgbox">
          <Saleslide/>
        </div>

        <div className="sale-cont">
          <h1 className='fw-bolder'>PAYDAY <br /> SALE NOW</h1>
          <p className='mb'>Spend minimal $100 get 30% off <br /> voucher code for your next purchase</p>
          <p className='fw-bolder'>1 Nov - 10 Nov 2022</p>
          <p>*Terms & Conditions apply</p>
          <button className='my-3'><Link to="/electronic">SHOP NOW</Link></button>
        </div>
      </div>

    </div>
  )
}

export default Salecoll
