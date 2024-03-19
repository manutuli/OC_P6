/* eslint-disable no-unused-vars */
import PropTypes from "prop-types"
import json from "../assets/cardsData.json"
import { useState } from "react";

function Slideshow({paramId}) {
  let [index, setIndex] = useState(0);
  // let [picture, setPicture] = useState(null)
  // 
  let house = json.find(card => card.id === paramId);
  const [...images] = house.pictures;
  const [...list] = images.map((image, index) => (
    <img
      key={index.toString()}
      src={image}
      alt={house.title}
    />
  ));
  // 
  const leftArrow = <svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white"/>
  </svg>;
  const rightArrow = <svg width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white"/>
  </svg>;
  //   
  // state logic
  if (index < 0) {
    setIndex(prevIndex => index = images.length - 1)
  } else if (index > images.length - 1) {
    setIndex(prevIndex => index = 0);
  }
  const pos = { leftIndex: index - 1, rightIndex: index + 1 };
  // 
  return list.length > 1 ? (
    <div tabIndex={0} id="carousel" className="carousel">
      { <span className="btn--left" onClick={() => setIndex(pos.leftIndex)}>{rightArrow}</span> }

      <span className="btn" >{`${index+1}/${images.length}`}</span>
      <div className="picture current" >{list[index]}</div>

      { <span className="btn--right" onClick={() => setIndex(pos.rightIndex)}>{leftArrow}</span>}      
    </div>
  ) : (
    <div tabIndex={0} id="carousel" className="carousel">
      <div className="picture current" >{list[index]}</div>
    </div>
  )
}
Slideshow.propTypes = {
  paramId : PropTypes.string,
}
export default Slideshow