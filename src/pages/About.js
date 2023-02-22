
// import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
// 
function About (props) {
  const {url, slogan} = props;
    return (
      <div className="about">
        <h2>About</h2>
        <div>
          <img src={url} alt={slogan}/>
        </div>
        {/* <Dropdown title={"fiabilité"} paramId={} /> */}
        {/* <Dropdown title={"respect"} paramId={} /> */}
        {/* <Dropdown title={"service"} paramId={} /> */}
        {/* <Dropdown title={"responsabilité"} paramId={} /> */}
        <Footer/>
      </div>
    )
  }
  export default About;