import React, { Component } from "react";
import Slider from "react-slick";
import a1 from "./20181012-MC-PromoT9-550x286.jpeg";
import a2 from "./Banner-Tet.jpeg";
import a3 from "./dac28c0253b38c296910f96cf25a973c.png";
import a4 from "./lazada-11-11.jpeg";
import a5 from "./lich-su-kien-san-sale-tiki-12-12-1400x800.jpeg";
import a6 from "./maxresdefault.jpeg";
import a7 from "./s2.jpeg";
import a8 from "./5-loi-ich.jpeg";
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: false,
      prevArrow: false,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel-brand">
        <div className="container">
          <div className="carousel-brand-inner">
            <p>기업들의 템플릿 제작</p>
            <p>
              more <i className="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
        <Slider {...settings}>
          <div className="carousel-brand-item">
            <img src={a8} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a1} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a2} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a3} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a4} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a5} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a6} alt="" />
          </div>
          <div className="carousel-brand-item">
            <img src={a7} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
