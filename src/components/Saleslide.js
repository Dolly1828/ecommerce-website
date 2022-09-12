import React from "react";
import Carousel from "./Carousel.js";

export default function Saleslide() {
  return (
    <Carousel>
      <div>
        <img
          src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
          alt="img1"
        />
      </div>
      <div>
        <img
          src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          alt="img2"
        />
      </div>
      <div>
        <img
          src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
          alt="img3"
        />
      </div>
    </Carousel>
  );
}
