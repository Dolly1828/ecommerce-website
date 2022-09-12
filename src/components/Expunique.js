import React from 'react'

const Expunique = () => {
  return (
    <div className='eq bg-light container rounded-3 my-5'>
        <div className="expQbg">
            <div className="bg-box bg-box1"></div>
            <div className="bg-box bg-box2"></div>
        </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="content px-md-5 py-5">
            <h1 className='fw-bolder lh-base sub-headings text-left'>LET'S <br />EXPLORE <br />UNIQUE</h1>
            <p>Live for Influential and Innovative fashion!</p>
        </div>
        <div className="img-sec">
            <img className='mx-5 px-5' src={require("./img/unique1.png")} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Expunique
