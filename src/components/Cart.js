import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from "./State/index"

const Cart = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
        }
        getProduct()
    }, [])

    const dispatch = useDispatch();
    const { AddItem, RemoveItem } = bindActionCreators(actionCreators, dispatch)

    const items = useSelector(state => state.number)
    return (
        <div className=' cart'>
            <h1 className='my-4'>In Your Cart</h1>
            {/* {product.map((ele) => { */}
                {/* // return ( */}
                    <div className="card mb-3 my-3 py-5 px-5">
                        <div className="row">
                            <div className="cart-img col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{ textAlign: 'left' }}>
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <div className='my-4'>
                                        <button className="btn btn-primary py-1 px-3" onClick={() => { RemoveItem(1) }} disabled={items <= 0}>-</button>
                                        <span className='mx-3'>Add to Cart</span>
                                        <button className="btn btn-primary py-1 px-3" onClick={() => { AddItem(1) }}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* ) */}
            {/* })} */}

        </div>
    )
}

export default Cart