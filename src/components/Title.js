
import json from "../assets/cardsData.json";
import Tags from "./Tags";
import { useParams } from "react-router-dom";
// 
export default function Title() {
    let { id } = useParams();
    const [{ location, title, tags }] = json.filter(
        (card) => { return card.id === id }
      );
      return(
        <>
          <h2>{title}</h2>
          <h3>{location}</h3>
            { tags?tags.map((tag)=>{ return ( <Tags key={tag} tag={tag} /> )}):null }
        </>
      )

}