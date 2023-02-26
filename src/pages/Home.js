// import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Cards.js";
import json from "../assets/cardsData.json";
import { Link } from "react-router-dom";
import homeImg from '../assets/IMG.png'
//
function Home() {
  const slogan = "Chez vous, partout et ailleurs";
  return (
    <>
      <section className="page--home">
        <div className="content">
          <Card cover={homeImg} title={slogan} unsplash />
          <div className="background--home">
          {json.map((card) => {
            return (
              <Link key={card.id} to={`/housing/${card.id}`}>
                <Card {...card} />
              </Link>
            );
          })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
