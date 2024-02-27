
import Tags from "./Tags";
//
export default function Product(props, ref) {
  const { location, title, tags } = props
  // 
  return (
    <div className="product">
      <div className="product--title">
        <h2 className="text-medium">{title}</h2>
        <span className="product--location">
          <h3 className="text-small">{location}</h3>
        </span>
      </div>
      <div className="product--tags">
        {tags ? tags.map((tag) => {
              return <Tags key={tag} tag={tag} />;
            }) : null}
      </div>
    </div>
  );
};
