import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Topik = () => {

    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(() => {
        uniShop();
    }, [])


    const uniShop = async () => {
        const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
        // console.log(response)
        const jsonData = await response.json();
        // console.log(jsonData)
        setProducts(jsonData);
    }

    return (
        <div className="row row-cols-2 row-cols-md-2 g-4">
            {products.map((ele) => {
                return (

                    <Link to="/jewelery" key={ele.id} style={{ color: '#000', textDecoration: 'none' }}> <div className="card mb-3 m-2 position-relative" style={{ maxWidth: '640px', boxSizing: 'border-box', height: '200px' }}>
                        <div className="row g-0 d-flex align-items-center" style={{ height: '100%' }}>
                            <i className="fas fa-arrow-circle-right fs-4 position-absolute" style={{ left: '250px', top: '25px', color: '#000' }}></i>
                            <div className="col-md-4 d-flex justify-content-center" style={{ height: '55%' }}>
                                <img src={ele.image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{ textAlign: 'left' }}>
                                    <span className="badge bg-danger my-3">New</span>
                                    <h5 className="card-title">{ele.title ? ele.title.slice(0, 40) : ""} ...</h5>
                                    <p className="card-text">{ele.description ? ele.description.slice(0, 50) : ""} ...</p>
                                </div>
                            </div>
                        </div>
                    </div></Link>

                )
            })}
        </div>


    )
}

export default Topik