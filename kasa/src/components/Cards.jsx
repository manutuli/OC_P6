import PropTypes from 'prop-types'

function Cards({ title, cover, unsplash }) {
  let coverClass, cardClass, titleClass, layerClass;
  if (unsplash) {
    coverClass = "unsplash--cover";
    titleClass = "unsplash--title";
    cardClass = "unsplash--card";
    layerClass = "unsplash--layer";
  } else {
    coverClass = "cover";
    cardClass = "card";
    titleClass = "title";
    layerClass = "layer";
  }
  return (
    <>
      <div className={cardClass}>
        <div className={layerClass}></div>
        <div className={titleClass}>
          <h3>{title}</h3>
        </div>
        <div className={coverClass}>
          <img alt={title} src={cover} />
        </div>
      </div>
    </>
  );
}
Cards.propTypes = {
  title : PropTypes.string,
  cover : PropTypes.string,
  unsplash : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
}
export default Cards