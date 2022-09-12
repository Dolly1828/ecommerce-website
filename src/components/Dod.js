import React from 'react'
import { Link } from "react-router-dom";


const Dod = (props) => {

    let { title, description, imageURL, price, id } = props;


    return (

        <div className="col">
            <div className="card h-100" key={id}>
                <img src={imageURL} className="card-img-top py-4 px-4" alt="..." style={{ height: "40%" }} />
                <div className="card-body my-2" style={{ textAlign: 'left' }}>
                    <h5 className="card-title">{title ? title.slice(0, 40) : ""} ...</h5>
                    <p className="card-text">{description ? description.slice(0, 100) : ""} ...</p>
                    <p className="card-text fs-3 my-4 fw-3">{price}$</p>
                    <div className='my-4'> {/* (with bindActionCreators) */}
                        <button className="btn btn-primary py-1 px-3">-</button>
                        <span className='mx-3'>Add to Cart</span>
                        <button className="btn btn-primary py-1 px-3">+</button>
                    </div>
                    <button className='btn btn-warning'><Link to={`/buy/${id}`}>BUY NOW</Link></button>
                </div>
            </div>
        </div>
    )

}

export default Dod
