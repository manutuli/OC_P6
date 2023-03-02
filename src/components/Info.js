
import json from "../assets/cardsData.json";
import Product from "./Product";
import Host from "./Host";
import Dropdown from "./Dropdown";
import Rating from "./Rating" ; 
//
export default function Info({paramId}) {
  const [{ 
    location, 
    title, 
    tags, 
    rating, 
    host, 
    description, 
    equipments 
  }] = json.filter(
    (card) => {
      return card.id === paramId;
    }
  );
  const {picture, name} = host;
  return (
    <main className="info--house">
      <div className="info--brief">
        <div className="product--container">
          <Product title={title} tags={tags} location={location} />
        </div>
        <div className="host--container">
          <div className="rating">
              <Rating rating={rating} />
          </div>
          <Host name={name} picture={picture} rating={rating} />
        </div>
      </div>
      <div className="dropdown--medium">
        <Dropdown name={"Description"} content={description} />
        <Dropdown name={"Equipements"} content={equipments} />
      </div>
    </main>
  );
}
