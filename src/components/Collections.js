import React from 'react'
import Salecoll from './Salecoll'
import Collectionslider from './Collectoinslider'
import Topik from './Topik'
import Dod from './Dod'


const Collections = (props) => {

    return (
        <>
            <div className='container'>
                <h2 className='sub-headings fw-bolder my-5 py-5'>COLLECTIONS</h2>
                <div className="sub-bg"><svg width="89" height="17" viewBox="0 0 89 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.399 1.9884C31.5324 4.04673 11.139 9.58839 0.499023 15.2884C27.4157 17.8217 82.769 18.7084 88.849 1.9884C80.299 0.563395 58.639 -1.4316 40.399 1.9884Z" fill="#EBD96B" />
                </svg>
                </div>

                <Collectionslider />
            </div>

            <Salecoll />

            <div className='toPik container'>
                <h2 className='sub-headings fw-bolder my-5 py-5'>TOP PICKS TO EXPLORE</h2>
                <div className="sub-bg"><svg width="89" height="17" viewBox="0 0 89 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.399 1.9884C31.5324 4.04673 11.139 9.58839 0.499023 15.2884C27.4157 17.8217 82.769 18.7084 88.849 1.9884C80.299 0.563395 58.639 -1.4316 40.399 1.9884Z" fill="#EBD96B" />
                </svg>
                </div>
                <Topik />
            </div>

            <div className='dod container'>
                <h2 className='sub-headings fw-bolder my-5 py-5'>DEAL OF THE DAY</h2>
                <div className="sub-bg">
                    <svg width="89" height="17" viewBox="0 0 89 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.399 1.9884C31.5324 4.04673 11.139 9.58839 0.499023 15.2884C27.4157 17.8217 82.769 18.7084 88.849 1.9884C80.299 0.563395 58.639 -1.4316 40.399 1.9884Z" fill="#EBD96B" />
                    </svg>
                </div>
                <div className="row row-cols-4 row-cols-md-4 g-4">
                    {props.products.map((ele) => {
                        return (
                            <Dod title={ele.title} description={ele.description} imageURL={ele.image} price={ele.price} id={ele.id}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Collections