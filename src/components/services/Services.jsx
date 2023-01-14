import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import Sdata from "./Sdata";
import Scard from "./Scard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i>
          <FontAwesomeIcon icon={faChevronRight} className="check chevron" />
        </i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i>
          <FontAwesomeIcon icon={faChevronLeft} className="check chevron" />
        </i>
      </button>
    </div>
  );
};

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="services">
      <Slider {...settings}>
        {Sdata.map((value) => {
          return <Scard item={value} />;
        })}
      </Slider>
    </div>
  );
};

export default Services;
