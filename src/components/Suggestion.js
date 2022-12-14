import React, { Component , useState, useEffect } from "react";
import Slider from "react-slick";

export default class VariableWidth extends Component {
    
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        uniShop();
    }, [])


    const uniShop = async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=20");
        // console.log(response)
        const jsonData = await response.json();
        // console.log(jsonData)
        setProducts(jsonData);
    }

    return (
      <div>
        <h2>Suggested for you</h2>
        <Slider {...settings}>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 200 }}>
            <p>200</p>
          </div>
          <div style={{ width: 75 }}>
            <p>75</p>
          </div>
          <div style={{ width: 300 }}>
            <p>300</p>
          </div>
          <div style={{ width: 225 }}>
            <p>225</p>
          </div>
          <div style={{ width: 175 }}>
            <p>175</p>
          </div>
        </Slider>
      </div>
    );
  }
}