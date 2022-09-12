import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


export default class SwipeToSlide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    return (
      <div className="coll-cards my-5">
        <Slider {...settings}>

          <div className="coll-card">
            <div className="coll-img-box">
              <Link to="/men" ><img src={require("./img/man.jpeg")} alt="" className='w-10 rounded-3' /></Link>
            </div>
            <div className="coll-cont d-flex justify-content-between align-items-center py-4">
              <div>
                <p className='fs-5'>Men Collection <br />
                  <span className='fs-6 text-muted'>Explore Now</span></p>
              </div>
              <Link to="/men" ><i className="fas fa-arrow-circle-right fs-4"></i></Link>
            </div>
          </div>

          <div className="coll-card">
            <div className="coll-img-box">
              <Link to="/women" ><img src={require("./img/woman.jpg")} alt="" className=' rounded-3' /></Link>
            </div>
            <div className="coll-cont d-flex justify-content-between align-items-center py-4">
              <div>
                <p className='fs-5'>Women Collection <br />
                  <span className='fs-6 text-muted'>Explore Now</span></p>
              </div>
              <Link to="/women" ><i className="fas fa-arrow-circle-right fs-4"></i></Link>
            </div>
          </div>

          <div className="coll-card">
            <div className="coll-img-box">
            <Link to="/jewelery"><img src={require("./img/jwellery.jpg")} alt="" className=' rounded-3' /></Link>
            </div>
            <div className="coll-cont d-flex justify-content-between align-items-center py-4">
              <div>
                <p className='fs-5'>Jewelery Collection <br />
                  <span className='fs-6 text-muted'>Explore Now</span></p>
              </div>
              <Link to="/jewelery"><i className="fas fa-arrow-circle-right fs-4"></i></Link>
            </div>
          </div>

          <div className="coll-card">
            <div className="coll-img-box">
            <Link to="/electronic"><img src={require("./img/man.jpeg")} alt="" className=' rounded-3' /></Link>
            </div>
            <div className="coll-cont d-flex justify-content-between align-items-center py-4">
              <div>
                <p className='fs-5'>Men Collection <br />
                  <span className='fs-6 text-muted'>Explore Now</span></p>
              </div>
              <Link to="/electronic"><i className="fas fa-arrow-circle-right fs-4"></i></Link>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}