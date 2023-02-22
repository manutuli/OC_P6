
import json from "../assets/cardsData.json";
import { useState } from "react";
//
export default function Dropdown({ title, paramId }) {
  let [dropState, setState] = useState("open");
  //
  let { description, equipments } = json.find((card) => card.id === paramId);
  //
  return (
    <div className="dropdown">
      <div
        onClick={() => {
          return dropState === "open" ? setState("close") : setState("open");
        }}
      >
        <h3>{title}</h3>
      </div>
      <div className={dropState}>
        {title === "Description" && <p>{description}</p>}
        {title === "Equipements" && (
          <p>{equipments.map((str) => " " + str + ", ")}</p>
        )}
        {/* {title === "fiabilité"}
        {title === "respect"}
        {title === "responsabilité"}
        {title === "service"} */}
      </div>
    </div>
  );
}
