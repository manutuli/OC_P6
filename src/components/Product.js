
import Tags from "./Tags";
//
export default function Product({ location, title, tags }) {
  // console.log(tags)
  return (
    <div className="product">
      <div className="product--title">
        <h2>{title}</h2>
        <span className="product--location">
          <h3>{location}</h3>
        </span>
      </div>
      <div className="product--tags">
        {tags ? tags.map((tag) => {
              return <Tags key={tag} tag={tag} />;
            }) : null}
      </div>
    </div>
  );
}
