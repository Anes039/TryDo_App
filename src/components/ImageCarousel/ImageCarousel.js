import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageCarousel.module.css';
import ImageContent from "../ImageContent/ImageContent";
const DummyData = [
  {
    title:'Development',
    text:'Getting tickets to the big show',
  }
]
function SimpleSlider() {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black",right:'1px' }}
        onClick={onClick}
      />
    );
  }
  
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" ,left:'0px'}}
      onClick={onClick}
    />
  );
}
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow  style={{background:"red !important"}}/>,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
 
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={styles.card} >
          <img src="https://randomwordgenerator.com/img/picture-generator/53e0d0464e5aad14f1dc8460962e33791c3ad6e04e50744172277fd79345c1_640.jpg" alt="" />
          {DummyData.map((item) => {
            return (
            <ImageContent  title={item.title} text={item.text}/>
            )
          })}
        </div>
        <div className={styles.card}> 
          <img src="https://randomwordgenerator.com/img/picture-generator/buzz-andersen-IOKqP2VnHoc-unsplash.jpg" alt="" />
           {DummyData.map((item) => {
            return (
            <ImageContent  title={item.title} text={item.text}/>
            )
          })}
        </ div>
        <div className={styles.card}>
          <img src="https://randomwordgenerator.com/img/picture-generator/57e8d5444f53a414f1dc8460962e33791c3ad6e04e50744172287ed2914fc7_640.jpg" alt="" />
           {DummyData.map((item) => {
            return (
            <ImageContent  title={item.title} text={item.text}/>
            )
          })}
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
