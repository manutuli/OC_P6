
import "../styles/index.css";
import Slideshow from "../components/Slideshow";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Error from "../components/NotFound"
import { useParams, Outlet } from "react-router-dom";
import {useEffect} from "react";
import json from "../assets/cardsData.json";
//

export default function Housing() {
  let { houseId } = useParams();
  let house = json.find(card => card.id === houseId);
  // 
  useEffect(()=>{
    window.scrollBy(0, -window.innerHeight)
  })
  // 
  if (!house) return  <Error />
  return (<>
      <section className="page--house content">
        <Slideshow paramId={house.id} />
        <Info paramId={house.id} />
      </section>
      <Footer />
      <Outlet/>
    </>
  )
}