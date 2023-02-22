import json from "../assets/cardsData.json"
import "../styles/components/carousel.css"
import { useState } from "react";
//
export default function Carousel({paramId}) {
  let [index, setIndex] = useState(0);
  let house = json.find(card => card.id === paramId);
  const [...images] = house.pictures;
  const [...list] = images.map((image, index) => (
    <img
      key={index.toString()}
      src={image}
      alt={house.title}
      style={{
        height: "250px",
        width: "400px",
        objectFit: "cover",
      }}
    />
  ));
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  const pos = { leftIndex: index + 1, rightIndex: index - 1 };
  console.log("--index", index)
  return (
    <div className="carousel--container">
      <div className="next">{list[pos.rightIndex]}</div>
      <div className="prev">{list[pos.leftIndex]}</div>

      {list.length > 1 && 
      <span onClick={() => setIndex(pos.leftIndex)}>Button-left</span> }
      <div className="content">{list[index]}</div>
      {list.length > 1 && 
      <span onClick={() => setIndex(pos.rightIndex)}>Button-right</span>}      
      
      <div className="next">{list[pos.rightIndex]}</div>
      <div className="prev">{list[pos.leftIndex]}</div>
    </div>
  );
}
