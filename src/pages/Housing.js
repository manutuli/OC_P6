import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import Tags from "../components/Tags";
import json from "../assets/cardsData.json";
import { useParams } from "react-router-dom";
//
function Housing() {
  let { id } = useParams();
  const list = [1, 2, 3, 4, 5];
  const [{ location, description, equipment, title, tags }] = json.filter(
    (card) => {
      return card.id === id
    }
  );
  // console.log(tags)
  return (
    <div className="house">
      <h2>{title}</h2>
      <h3>{location}</h3>
      <Carrousel />
      {tags.map((tag)=>{
        return (
          <Tags key={tag} tag={tag} />
        )
      })}
      <Dropdown title="Description" paragraph={description} />
      <Dropdown title="Equipement" paragraph={equipment} />
      <Footer />
    </div>
  );
}
export default Housing;
