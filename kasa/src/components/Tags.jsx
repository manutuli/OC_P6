import PropTypes from "prop-types"
// 
function Tags(props) {
    const {tag} = props
    return (
        <span className="tag">
            <h3>{tag}</h3>
        </span>
    )
}
Tags.propTypes = {
    tag : PropTypes.string,
}
export default Tags