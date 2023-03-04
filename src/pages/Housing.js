
import "../styles/index.css";
import Slideshow from "../components/Slideshow";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { useParams, Outlet } from "react-router-dom";
import {useEffect} from "react";
//
export default function Housing() {
  let { houseId } = useParams();
  // 
  useEffect(()=>{
    window.scrollBy(0, -window.innerHeight)
  })
  // 
  return (<>
      <section className="page--house">
        <Slideshow paramId={houseId} />
        <Info paramId={houseId} />
      </section>
      <Footer />
      <Outlet/>
    </>
  )
}