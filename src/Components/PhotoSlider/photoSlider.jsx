import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/KF_new_web_launch_banner1.webp";
import img2 from "../../assets/banner2.webp";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "150px",
        right: "25px",
        zIndex: 1,
        fontSize: "24px",
        cursor: "pointer",
      }}
    >
      →
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "150px",
        left: "25px",
        zIndex: 1,
        fontSize: "24px",
        cursor: "pointer",
      }}
    >
      ←
    </div>
  );
};

const PhotoSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Link to="/contactUs">
            <img
              className="md:w-full md:h-auto w-auto h-[250px]"
              src={image.src}
              alt={image.alt}
            />
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default PhotoSlider;
