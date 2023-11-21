import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./Slider.scss"
import { useState } from "react";

const Slider = () => {
  const [currentSlide , setCurrentSlide] = useState(0)
  const data = [
    "https://www.yugioh-card.com/eu/wp-content/uploads/2022/10/New-to-YGO-Hero-Banner-Card-EN.webp",
    "https://farm9.staticflickr.com/8500/8312661685_23447519b0_o.jpg",

  ];
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0? 2 :(prev ) => prev-1)
  }
  const nextSlide =() => {
    setCurrentSlide(currentSlide === 2? 0 :(prev ) => prev+1)
  }
  return (
    <div className="slider">
      {" "}
       <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]}></img>
        <img src={data[1]}></img>
        <img src={data[0]}></img>
      </div>{" "}
      <div className="icons">
        <div className="icon" onClick={previousSlide}> <KeyboardDoubleArrowLeftIcon/> </div>
        <div className="icon" onClick={nextSlide}> <KeyboardDoubleArrowRightIcon/> </div>
     
      </div>
    </div>
  );
};

export default Slider;
