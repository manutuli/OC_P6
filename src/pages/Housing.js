
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Info from "../components/Info";
import "../styles/index.css";
import {
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
// import { useState } from "react";
//
export default function Housing( cardId ) {
  let { id } = useParams();
  let location = useLocation();
  useEffect(()=>{
    location.state = id;
  })
  // location.state !== id ?  : console.log("-- isValid")
  // console.log("--housing : ", location.pathname);
  // 
  console.log("--state : ", location.state);
  console.log("--id : ", id);
  //
  return (
    location.state === id ?
    <>
      <section className="page--house">
        <Carousel paramId={id} />
        <Info paramId={id} />
      </section>
      <Footer />
    </>
      : <Navigate to={"/404notFound"}/>
  );
}
