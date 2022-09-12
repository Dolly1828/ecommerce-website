import React from 'react'
import Collections from './Collections';
import Expunique from './Expunique';
import Reg from "./Reg";
import Footer from "./Footer"

const Home = (props) => {

    
    return (
        <div>
            <Expunique />
            <Collections products={props.products}/>
            <Reg />
            <Footer />
        </div>
    )
}

export default Home
