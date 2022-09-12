import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'; // we imported this because
import { actionCreators } from "./State/index"
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";



const Buynow = (props) => {

  // let { title, description, imageURL, price} =props;
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
  const {AddItem, RemoveItem} = bindActionCreators(actionCreators, dispatch)

  const items = useSelector(state => state.number)

  return (
    <div className='container'>

      <div className="d-flex justify-content-between px-5 py-5">
        <div className="buy-imgbox" style={{ height: '500px' }}>
          <img src={product.image} alt="" style={{ height: '100%' }} />
        </div>

        <div className="sale-cont">
          <h1 className='fw-bolder'>{product.title}</h1>
          <p className='mb'>{product.description}</p>
          <p className='fw-bolder fs-2'>{product.price}$</p>

          <div className='my-4'> {/* (with bindActionCreators) */}
            <button className="btn btn-primary py-1 px-3" onClick={() => { RemoveItem(1) }} disabled={items <= 0}>-</button>
            <span className='mx-3'>Add to Cart</span>
            <button className="btn btn-primary py-1 px-3" onClick={() => { AddItem(1) }}>+</button>
          </div>
          <button className='my-3 btn btn-warning'><Link to={`/cart/${id}`} style={{color:'#fff', textDecoration:'none'}}>GO TO CART</Link></button>
        </div>
      </div>

      {/* <div className="suggetion">
        <Suggestion/>
      </div> */}
    </div>
  )
}

export default Buynow
