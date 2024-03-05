
import Footer from "../components/Footer";
import Card from "../components/Cards.js";
import json from "../assets/cardsData.json";
import { Link, Outlet, useLoaderData } from "react-router-dom";
//
function Home() {
  const imgHome = useLoaderData()
  const slogan = "Chez vous, partout et ailleurs";
  return (
    <>
      <section className="page--home">
        <div className="content">
          <Card cover={imgHome} title={slogan} unsplash />
          <div className="background--home">
          {json.map((card) => {
            return (
              <Link
                key={card.id} 
                to={`/housing/${card.id}`}
                state={{cardId : card.id}}
                 >
                <Card {...card} cardId={card.id} />
              </Link>
            );
          })}
          </div>
        </div>
      </section>
      <Footer />
      <Outlet/>
    </>
  );
}
export default Home;
