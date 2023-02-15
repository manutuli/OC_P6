// import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Cards.js";
import json from "../assets/cardsData.json"; 
import { Link } from "react-router-dom";
//
function Home() {
  return (
    <section className="home">
      <div className="title">
        <h2>Home</h2>
      </div>
      <div className="content">
        {json.map((card) => {
          return (
            <Link key={card.id} to={`/housing/${card.id}`}>
              <Card {...card} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </section>
  );
}
export default Home;
