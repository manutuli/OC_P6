
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Title from "../components/Title";
import { useParams, Navigate  } from "react-router-dom";
//
export default function Housing() {
  // 
  let { id } = useParams();
  if (!id) { return <Navigate to="/error-404" /> }
  // 
  return (
    <div className="house">
      <Carousel paramId={id} />
      <Title/>
      <Dropdown title={"Description"} paramId={id} />
      <Dropdown title={"Equipements"} paramId={id} />
      <Footer />
    </div>
  )
}
