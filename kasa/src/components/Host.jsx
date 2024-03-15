import PropTypes from 'prop-types'
// 
function Host({name, picture}) {
  return (
    <div className="host--identity">
      <span className="host--name">
        <p>{name}</p>
      </span>
      <div className="host--picture">
          <img src={picture} alt={name} />
      </div>
    </div >
  );
}
Host.propTypes = {
  name : PropTypes.string,
  picture : PropTypes.string,
}
export default Host