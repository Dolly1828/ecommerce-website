import React, { useState, useEffect } from 'react'
import Dod from './Dod';

const Products = (props) => {

    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(() => {
        uniShop();
    }, [])

    const uniShop = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${props.category}`);
        const jsonData = await response.json();
        setProducts(jsonData);
    }

  return (
    <div className='container my-5'>
        <h1 className='my-5 text-capitalize'>{props.category}</h1>
        <div className="row row-cols-4 row-cols-md-4 g-4">
                    {products.map((ele) => {
                        return (
                            <Dod title={ele.title} description={ele.description} imageURL={ele.image} price={ele.price} id={ele.id} />
                        )
                    })}
                </div>
    </div>
  )
}

export default Products