import React from "react";
import SliderImage from "../../images/sliderImg.svg";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function Orders() {
  return (
    <div className="orders__container-item">
      <Slider {...settings}>
        <div className="slider__item">
          <img src={SliderImage} alt="slider image" />

          <div className="orders__slider-info">
            <p className="orders__slider-desc">
              HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta
              gravida at eget metus. Etiam porta sem malesuada magna mollis
              euismod.ing
            </p>
            <div className="main__orders-footer">
              <span className="main__orders-title">Joshua Home</span>
              <span className="main__orders-info"> New York Times </span>
            </div>
          </div>
        </div>
        <div className="slider__item">
          <img src={SliderImage} alt="slider image" />

          <div className="orders__slider-info">
            <p className="orders__slider-desc">
              HeadNulla vitae elit libero, a pharetra augue. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Pus sit amet fermentum. Donec id elit non mi porta
              gravida at eget metus. Etiam porta sem malesuada magna mollis
              euismod.ing
            </p>
            <div className="main__orders-footer">
              <span className="main__orders-title">Joshua Home</span>
              <span className="main__orders-info"> New York Times </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Orders;
