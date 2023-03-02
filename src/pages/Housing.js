
import "../styles/index.css";
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { useParams, Outlet } from "react-router-dom";
//
export default function Housing() {
  let { houseId } = useParams();
  // 
  return (<>
      <section className="page--house">
        <Carousel paramId={houseId} />
        <Info paramId={houseId} />
      </section>
      <Footer />
      <Outlet/>
    </>
  )
}