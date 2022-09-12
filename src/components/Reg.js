import React from 'react'

const Reg = () => {
    return (
        <div className='reg bg-light container my-5 py-5'>
            <div className="card text-center">
                <div className="card-body bg-light">
                    <h4 className="fw-bolder card-title">JOIN SHOPPING COMMUNITY <br /> TO GET MONTHLY PROMO</h4>
                    <p className="card-text my-5">Type your email down below and be young wild <br /> generation</p>
                    <input type="email" name="email" id="" placeholder='Add your email.. ' /><br />
                    <a href="/" className="btn btn-dark">SEND</a>
                </div>
            </div>
        </div>
    )
}

export default Reg
