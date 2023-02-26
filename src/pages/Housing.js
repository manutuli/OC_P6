import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Info from "../components/Info";
import "../styles/index.css";
import {
  useParams,
  // Navigate,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
// import { useState } from "react";
//
export default function Housing({ cardId }) {
  //
  let { id } = useParams();
  // let location = useLocation();
  // const [param, setParam] = useState(id);
  // 
  // if (id !== param) {
  //   return <Navigate to="/error-404" replace={true} />;
  // }
  // 
  // setParam(location.state = {paramId: id, count: 0})
  // console.log(location.state.count +1);
  //
  return (
    <>
      <section className="page--house">
        <Carousel paramId={id} />
        <Info paramId={id} />
      </section>
      <Footer />
    </>
  );
}
